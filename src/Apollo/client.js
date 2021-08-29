import { ApolloClient, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { typeDefs } from "../GraphQL/Schema";
import cache from "./Cache";
import { setContext } from "@apollo/client/link/context";
require("dotenv").config();

const url_api = "";

if (process.env.NODE_ENV === "development") {
  url_api = "http://localhost:4000/graphql";
} else {
  url_api =
    "https://us-central1-sunnydale.cloudfunctions.net/sunnydalemanagement-api/graphql";
}

const httpLink = new createHttpLink({
  uri: url_api,
  credentials: "same-origin",
  typeDefs,
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 6,
    retryIf: (error, operation) => {
      const {
        query: {
          definitions: [definition],
        },
      } = operation;
      const { operation: graphQlType } = definition;
      return graphQlType === "query";
    },
  },
});

const authMiddleware = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: retryLink.concat(errorLink).concat(authMiddleware).concat(httpLink),
  cache: cache,
});

export default client;
