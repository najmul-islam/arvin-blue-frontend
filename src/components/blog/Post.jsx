import React from "react";
import { Link } from "react-router-dom";
const url = process.env.REACT_APP_API;
const Post = ({ post }) => {
  // console.log(post);

  return (
    <div className="container">
      <Link to={`blog/${post.id}`}>
        <div className="row">
          <div className="col-md-6">
            <img src={`${url}${post.featureImage.formats.small.url}`} alt="" />
          </div>
          <div className="col-md-6">
            <h5>{post.title}</h5>
            <p>{post.published_at.substring(0, 10)}</p>
            <p>{post.description.substring(0, 200)} ...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
