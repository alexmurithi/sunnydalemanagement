import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { typeDefs } from "../GraphQL/Schema";
import cache from "./Cache";
import { setContext } from "@apollo/client/link/context";
require("dotenv").config();

const httpLink = new createHttpLink({
  uri: `${
    process.env.NODE_ENV === "development"
      ? "https://localhost:4000/graphql"
      : `${process.env.API_ENDPOINT}`
  }`,
  credentials: "include",
  // headers: {
  //   authorization: localStorage.getItem("token") || "",
  // },

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

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || null,
    },
  }));

  return forward(operation);
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
