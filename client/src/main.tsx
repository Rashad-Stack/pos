import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";

const link = createHttpLink({
  uri: import.meta.env.PROD
    ? import.meta.env.BASE_URL + "graphql"
    : import.meta.env.VITE_SERVER_DEV_URL + "/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  name: "pos-client",
  version: "0.1",
  link,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>,
);
