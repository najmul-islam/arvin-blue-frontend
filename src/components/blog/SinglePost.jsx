import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
const url = process.env.REACT_APP_API;

const SinglePost = () => {
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
  }, [params]);

  console.log(singlePost);
  return (
    <div className="container">
      <img src={`${url}${imgUrl}`} alt="" />
      <h1>{singlePost.title}</h1>
      <ReactMarkdown
        transformImageUri={(uri) =>
          uri.startsWith("http") ? uri : `${url}${uri}`
        }
      >
        {singlePost.description}
      </ReactMarkdown>
    </div>
  );
};

export default SinglePost;
