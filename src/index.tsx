import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  console.log("kunal", token);
  operation.setContext({
    headers: {
      authorization:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoiaXRhY2hpVWNoaWhhIiwiZnVsbE5hbWUiOiJOYXJ1dG8gIiwiZW1haWxJZCI6ImFiY0B4eXouY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkaE9tOTdUaUQuczdsUGt6UEk0bXI1ZUNQUEVmTWhSb0lKOEJ6L3JtYXRhclJlMk52SHBhaWEiLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAiLCJpc1B1YmxpYyI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMi0xMC0xMlQwNzo0OToyNC45MDVaIiwidXBkYXRlZEF0IjoiMjAyMi0xMC0xMlQwNzo0OToyNC45MDZaIiwiaWF0IjoxNjY1NzI3MTYxLCJleHAiOjE2NjU4MTM1NjEsImF1ZCI6ImxvY2FsaG9zdCIsImlzcyI6Imh0dHBzOnNvY2FpbC5jb20ifQ.IeIv5J27vcouzWs8TsUGKVkOXdLyN272p_0SaWxsIBs",
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
