import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import BlogPage from "./pages/Blog/BlogPage";
import CategoryPage from "./pages/Blog/CategoryPage";
import SinglePostPage from "./pages/Blog/SinglePostPage";
import SingleCategoryPostPage from "./pages/Blog/SingleCategoryPostPage";
import AboutPage from "./pages/Other/AboutPage";
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/category/:category" component={CategoryPage} />
        <Route exact path="/blog/:id" component={SinglePostPage} />
        <Route
          exact
          path="/category/blog/:id"
          component={SingleCategoryPostPage}
        />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
