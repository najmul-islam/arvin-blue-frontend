import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/Blog/BlogPage";
import SinglePostPage from "./pages/Blog/SinglePostPage";
import About from "./pages/Other/About";
import Header from "./components/header/Header";
import Footer from "./components/other/Footer";

// Theme
import { ThemeProvider } from "styled-components";
import { useTheme } from "./theme/Theme";
import { GlobalStyle, darkTheme, lightTheme } from "./theme/globalStyled";

function App() {
  // Theme hook
  const [theme] = useTheme();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Header />
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        <Route exact path="/blog/:id">
          <SinglePostPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
