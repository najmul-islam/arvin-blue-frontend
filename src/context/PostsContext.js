import React, { useState, useEffect, useContext, createContext } from "react";
// url endpoint
const post_url = process.env.REACT_APP_POST_API;

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  // infiniteScroll
  // for blog post
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(5);

  // fetch post
  const getPosts = () => {
    fetch(`${post_url}?_start=0&_limit=5`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((posts) => {
        setPosts(posts);
        setAllPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  //  for blog url
  const fetchPosts = async () => {
    const res = await fetch(`${post_url}?_start=${page}&_limit=5`);
    const posts = await res.json();
    return posts;
  };

  const fetchData = async () => {
    const postsFromServer = await fetchPosts();

    setPosts([...posts, ...postsFromServer]);
    if (postsFromServer.length === 0 || postsFromServer.length < 5) {
      setHasMore(false);
    }

    setPage(page + 5);
  };

  // const handleRefresh = () => {
  //   setPosts(allPosts);

  // };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        fetchData,
        hasMore,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostsContext);
};
