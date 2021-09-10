import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/Other/About";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
