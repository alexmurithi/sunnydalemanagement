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
    PropertyItem: {
      fields: {
        price: {
          read(price) {
            return price.toLocaleString("kes", {
              style: "currency",
              currency: "KES",
            });
          },
        },
        description: {
          read(description) {
            return description.replace(/(<([^>]+)>)/gi, "");
          },
        },
      },
    },
  },
});
export default cache;
