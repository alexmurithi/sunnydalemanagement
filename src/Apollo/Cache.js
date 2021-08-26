import { InMemoryCache } from "@apollo/client";
import { isLoggedInVar } from "./ReactVariables";

 const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
      },
    },
  },
});
export default cache;