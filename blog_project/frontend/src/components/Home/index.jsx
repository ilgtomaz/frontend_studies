import React, { useEffect, useState, createRef } from "react";
import { Container } from "@material-ui/core";
import Menu from "../Menu";
import Post from "../Post";
import { containerStyle } from "../../App";
import { Posts } from "./style";
import api from "../../services/api";
import Modal from "../Modal";
import { ExternalContainer } from "./style";

function Home() {
  const [posts, setPosts] = useState([]);
  const [updatePosts, setUpdatePosts] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalAuthor, setModalAuthor] = useState("");
  const [modalText, setModalText] = useState("");
  const [modalId, setModalId] = useState(0);
  const modal = createRef(null);

  function updatePost(ehDeletado) {
    setUpdatePosts(ehDeletado);
  }

  function changeModalStatus(ehExibido) {
    setIsShow(ehExibido);
  }

  function getModalData(dados) {
    setModalId(dados.id);
    setModalTitle(dados.title);
    setModalAuthor(dados.author);
    setModalText(dados.text);
  }

  useEffect(() => {
    api
      .get("/post")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePosts]);

  return (
    <ExternalContainer>
      <Container maxWidth="sm" style={containerStyle}>
        <Menu />
        <Posts>
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                id={post.id}
                title={post.title}
                author={post.author}
                text={post.text}
                updatePost={updatePost.bind(this)}
                changeModalStatus={changeModalStatus.bind(this)}
                getModalData={getModalData.bind(this)}
              />
            );
          })}
        </Posts>
      </Container>
      <Modal
        id={modalId}
        title={modalTitle}
        author={modalAuthor}
        text={modalText}
        isShow={isShow}
        modalRef={modal}
        changeModalStatus={changeModalStatus.bind(this)}
        updatePost={updatePost.bind(this)}
      />
    </ExternalContainer>
  );
}

export default Home;
