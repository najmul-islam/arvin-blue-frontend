import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <PostsProvider>
      <App />
    </PostsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
