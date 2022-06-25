import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CategoryPost from "./CategoryPost";
import { useCategory } from "../../context/CategoryContext";

const CategoryPosts = () => {
  const { categoryPost, fetchCategoryData, categoryHasMore } = useCategory();

  return (
    // <InfiniteScroll
    //   dataLength={categoryPost.length}
    //   next={fetchCategoryData}
    //   hasMore={categoryHasMore}
    //   loader={
    //     <p style={{ textAlign: "center" }}>
    //       <b>Yay! You have seen it all</b>
    //     </p>
    //   }
    //   endMessage={
    //     <p style={{ textAlign: "center" }}>
    //       <b>Yay! You have seen it all</b>
    //     </p>
    //   }
    //   style={{ overflow: "visible" }}
    // >
    //   <div className="row py-5 justify-content-lg-center">
    //     <div className="col-lg-7">
    //       {categoryPost.map((post) => (
    //         <CategoryPost key={post.id} post={post} />
    //       ))}
    //     </div>
    //   </div>
    // </InfiniteScroll>
    <div className="row py-5 justify-content-lg-center">
      <div className="col-lg-7">
        {categoryPost.map((post) => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPosts;
