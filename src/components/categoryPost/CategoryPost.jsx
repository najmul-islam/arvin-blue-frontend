import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostImg, PostBtn, Tags } from "./style/categoryPost.style";
const url = process.env.REACT_APP_API;

const CategoryPost = ({ post }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const tags = post.categories;
    setTags(tags);
  }, [post.categories]);

  return (
    <>
      <div className="row py-2 mb-3 rounded post-container">
        <div className="col-md-5">
          <PostImg
            src={`${url}${post.featureImage.formats.small.url}`}
            alt={post.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-between">
          <h5>{post.title}</h5>
          {/* <div>
            {tags.map((tag) => (
              <Tags>{tag.name} </Tags>
            ))}
          </div> */}
          <p>{post.published_at.substring(0, 10)}</p>
          {/* <p>{post.id}</p> */}
          <p>{post.description.substring(0, 150)} ...</p>
          <Link to={`blog/${post.id}`}>
            <PostBtn className="post-btn">Read More</PostBtn>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryPost;
