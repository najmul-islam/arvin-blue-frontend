import styled from "styled-components";

export const PostImg = styled.img`
  height: 270px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const PostHead = styled.div``;

export const PostBtn = styled.button`
  min-width: 120px;
  padding: 8px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 600;
`;

export const PostDesc = styled.div`
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Tags = styled.span`
  font-size: 12px;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
`;
