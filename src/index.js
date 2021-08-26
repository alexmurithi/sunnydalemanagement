import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/styles";
import Client from "./Apollo/Client";
import theme from "./Themes/Default";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("sunnyDale")
);
