import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { getClientLoading } from "./utils/common";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  operation.setContext({
    headers: {
      authorization:  token ? token : ""
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

client.cache.writeQuery({
  query: getClientLoading,
  data : {
    clientLoading : false
  }
})
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <HashRouter >
      <App />
      </HashRouter>
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
