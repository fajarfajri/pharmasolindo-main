import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Client from "./client";
import "./index.css";
import "@fontsource/rubik";
import "@fontsource/rubik/variable.css";

import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
