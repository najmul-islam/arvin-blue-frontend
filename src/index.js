import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext";
import { CategoryProvider } from "./context/CategoryContext";
import { Theme } from "./theme/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Theme>
      <PostsProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </PostsProvider>
    </Theme>
  </BrowserRouter>,
  document.getElementById("root")
);
