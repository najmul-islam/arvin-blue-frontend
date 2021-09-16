import React, { useState, useEffect, useContext, createContext } from "react";
// url endpoint
const post_url = process.env.REACT_APP_POST_API;
const categories_url = process.env.REACT_APP_CATEGORIES_API;

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchPosts = () => {
    fetch(`${post_url}?_sort=id:DESC`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCategories = () => {
    fetch(categories_url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <PostsContext.Provider
      value={{ posts, setPosts, categories, setCategories }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostsContext);
};
