import React, { useState, useEffect } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import api from "../../services/api";
import { Container, ContainerTitle, Title, Author, Text } from "./style";

function Post({
  title,
  author,
  text,
  id,
  updatePost,
  changeModalStatus,
  getModalData,
}) {
  const [updateOwnPost, setUpdateOwnPost] = useState(false);

  useEffect(() => {
    if (updateOwnPost) {
      api
        .delete(`/post/${id}`)
        .then((response) => {
          if (response.data.result.affected === 1) {
            updatePost(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setUpdateOwnPost(false);
    updatePost(false);
  }, [updateOwnPost, id, updatePost]);

  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
        <FaPencilAlt
          onClick={(event) => {
            getModalData({
              id,
              title,
              author,
              text
            });
            changeModalStatus(true);
          }}
        />
        <FaTrash
          onClick={(event) => {
            if (!updateOwnPost) {
              setUpdateOwnPost(true);
            }
          }}
        />
      </ContainerTitle>
      <Author>{author}</Author>
      <Text>{text}</Text>
    </Container>
  );
}

export default Post;
