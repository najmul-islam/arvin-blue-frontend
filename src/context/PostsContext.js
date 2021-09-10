import React, { useState, useEffect, useContext, createContext } from "react";
// url endpoint
const post_url = process.env.REACT_APP_POST_API;
const categories_url = process.env.REACT_APP_CATEGORIES_API;
const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    fetch(categories_url)
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);
  return (
    <PostsContext.Provider value={{ categories, setCategories }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostsContext);
};
