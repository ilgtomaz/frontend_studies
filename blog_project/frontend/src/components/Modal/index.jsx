import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import api from "../../services/api";
import {
  Container,
  ModalContent,
  ModalContentHeaderExit,
  ModalContentMain,
  ModalHeader,
  ModalTitle,
} from "./style";

function Modal({
  isShow,
  modalRef,
  changeModalStatus,
  id,
  title,
  author,
  text,
  updatePost
}) {
  const [ownTitle, setOwnTitle] = useState(title);
  const [ownAuthor, setOwnAuthor] = useState(author);
  const [ownText, setOwnText] = useState(text);
  const [ownId, setOwnId] = useState(id);
  const [submit, setSubmit] = useState(false);
  const [inputChange, setInputChange] = useState(false);

  useEffect(() => {
    if (!inputChange) {
      setOwnTitle(title);
      setOwnAuthor(author);
      setOwnText(text);
      setOwnId(id);
    }

    if (!submit) {
      return;
    }

    api
      .put(`/post/${ownId}`, {
        title: ownTitle,
        author: ownAuthor,
        text: ownText,
      })
      .then(() => {
        alert("Post atualizado com sucesso.");
        changeModalStatus(false);
        updatePost(true);
      })
      .catch((error) => {
        console.log(error);
      });

    setSubmit(false);
  }, [
    isShow,
    title,
    author,
    text,
    id,
    ownTitle,
    ownAuthor,
    ownText,
    ownId,
    submit,
    inputChange,
    changeModalStatus,
    updatePost
  ]);

  if (title) {
    return (
      <Container ref={modalRef} isShow={isShow}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalContentHeaderExit>
              <FaTimes
                onClick={() => {
                  changeModalStatus(false);
                  setInputChange(false);
                }}
              />
            </ModalContentHeaderExit>
          </ModalHeader>
          <ModalContentMain>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setInputChange(true);
                setSubmit(true);
              }}
            >
              <TextField
                onChange={(event) => {
                  setInputChange(true);
                  setOwnTitle(event.target.value);
                }}
                value={ownTitle}
                id="title"
                label="Title"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                onChange={(event) => {
                  setInputChange(true);
                  setOwnAuthor(event.target.value);
                }}
                value={ownAuthor}
                id="author"
                label="Author"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                onChange={(event) => {
                  setInputChange(true);
                  setOwnText(event.target.value);
                }}
                value={ownText}
                id="text"
                label="Texto"
                variant="outlined"
                margin="normal"
                multiline
                minRows={5}
                maxRows={8}
                fullWidth
              />
              <Button variant="contained" color="default" type="submit">
                Salvar
              </Button>
            </form>
          </ModalContentMain>
        </ModalContent>
      </Container>
    );
  }

  return <></>;
}

export default Modal;
