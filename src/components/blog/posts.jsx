import React from "react";
import Post from "./Post";
import { usePost } from "../../context/PostsContext";

const Posts = () => {
  const { posts } = usePost();
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
