import React, { useState, useEffect, useContext, createContext } from "react";

const categories_url = process.env.REACT_APP_CATEGORIES_API;

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryPost, setCategoryPost] = useState([]);

  // for category post
  const [categoryHasMore, setCategoryHasMore] = useState(true);
  const [categoryPage, setCategoryPage] = useState(5);

  // fetch category
  const getCategories = () => {
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
    getCategories();
  }, []);

  const handleCategory = (category) => {
    setCategoryPost(category.posts);
  };

  const fetchCategory = async () => {
    const res = await fetch(`${categoryPost}?_start=${categoryPage}&_limit=5`);
    const posts = await res.json();
    return posts;
  };

  const fetchCategoryData = async () => {
    const postsFromServer = await fetchCategory();

    setCategoryPost([...categoryPost, ...postsFromServer]);
    if (postsFromServer.length === 0 || postsFromServer.length < 5) {
      setCategoryHasMore(false);
    }

    setCategoryPage(categoryPost + 5);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        categoryPost,
        fetchCategoryData,
        categoryHasMore,
        handleCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
