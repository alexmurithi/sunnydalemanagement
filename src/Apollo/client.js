import { ApolloClient, InMemoryCache, createHttpLink, from} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

const httpLink = new createHttpLink({
    uri: "https://us-central1-sunnydale.cloudfunctions.net/sunnydalemanagement-api/graphql",
    credentials: 'same-origin',
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

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

const Client = new ApolloClient({
    link: retryLink.concat(errorLink).concat(httpLink),
    cache: new InMemoryCache()
})


export default Client;