import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostHead, PostDesc } from "./style/categoryPost.style";
import ReactMarkdown from "react-markdown";
const url = process.env.REACT_APP_API;

const CategorySinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const [imgUrl, setImgUrl] = useState("");
  const params = useParams();

  const getParams = () => {
    fetch(`${url}/posts/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((singlePost) => {
        setSinglePost(singlePost);
        const imgUrl = singlePost.featureImage.formats.small.url;
        setImgUrl(imgUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getParams();
  }, []);

  return (
    <>
      <PostHead className="row p-md-5 mt-5 post-head">
        <div className="col-lg-5">
          <h3>{singlePost.title}</h3>
        </div>
        <div className="col-lg-7">
          <img src={`${url}${imgUrl}`} alt="" className="w-100" />
        </div>
      </PostHead>
      <div className="row justify-content-md-center">
        <PostDesc className="col-lg-8 py-5">
          <ReactMarkdown
            transformImageUri={(uri) =>
              uri.startsWith("http") ? uri : `${url}${uri}`
            }
          >
            {singlePost.description}
          </ReactMarkdown>
        </PostDesc>
      </div>
    </>
  );
};

export default CategorySinglePost;
