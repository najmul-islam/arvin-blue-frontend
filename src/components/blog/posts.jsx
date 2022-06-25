import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import { usePost } from "../../context/PostsContext";

const Posts = () => {
  const { posts, fetchData, hasMore } = usePost();

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      style={{ overflow: "visible" }}
    >
      <div className="row py-5 justify-content-lg-center">
        <div className="col-lg-7">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Posts;
