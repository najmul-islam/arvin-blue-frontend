import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "styled-bootstrap-grid";
const url = process.env.REACT_APP_API;
const Post = ({ post }) => {
  // console.log(post);

  return (
    <Container>
      <Link to={`blog/${post.id}`}>
        <Row>
          <Col col md={6}>
            <img src={`${url}${post.featureImage.formats.small.url}`} alt="" />
          </Col>
          <Col col md={6}>
            <h5>{post.title}</h5>
            <p>{post.published_at.substring(0, 10)}</p>
            <p>{post.description.substring(0, 200)} ...</p>
          </Col>
        </Row>
      </Link>
    </Container>
  );
};

export default Post;
