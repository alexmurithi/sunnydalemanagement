import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(
  !!localStorage.getItem(JSON.parse(JSON.stringify("token")))
);
