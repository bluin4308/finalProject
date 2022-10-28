import React from "react";
import ReactDOM from "react-dom/client";
import client from "./apollo";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Routing from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routing />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
