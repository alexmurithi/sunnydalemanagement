import { ApolloClient, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { typeDefs } from "../GraphQL/Schema";
import cache from "./Cache";
import { setContext } from "@apollo/client/link/context";

require("dotenv").config();

const httpLink = new createHttpLink({
  uri: `${
    process.env.NODE_ENV === "development"
      ? `${process.env.REACT_APP_LOCAL_API_ENDPOINT}`
      : `${process.env.REACT_APP_API_ENDPOINT}`
  }`,
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
