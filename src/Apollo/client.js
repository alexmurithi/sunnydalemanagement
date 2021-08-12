import { ApolloClient, InMemoryCache, HttpLink, from} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
    uri: "https://sunnydalemanagement-server.herokuapp.com/graphql",
    credentials:'same-origin',
    headers:{

    }
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
    link: from( [errorLink,httpLink]),
    cache: new InMemoryCache()
})


export default Client;