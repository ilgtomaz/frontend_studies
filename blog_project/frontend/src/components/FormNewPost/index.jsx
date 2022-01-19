import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import api from "../../services/api";

function FormularioNovoPost({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({
    title: {
      valid: true,
      helpText: "",
    },
    author: {
      valid: true,
      helpText: "",
    },
    text: {
      valid: true,
      helpText: "",
    },
  });

  useEffect(() => {
    const foundErrors = errors;

    if (!submit) {
      return;
    }

    if (!title) {
      foundErrors.title.valid = false;
      foundErrors.title.helpText = "Título não preenchido.";
    }

    if (!author) {
      foundErrors.author.valid = false;
      foundErrors.author.helpText = "Author não preenchido.";
    }

    if (!text) {
      foundErrors.text.valid = false;
      foundErrors.text.helpText = "Texto não preenchida.";
    }

    api
      .post("/post", {
        title,
        author,
        text,
      })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    setErrors(foundErrors);
    setSubmit(false);
  }, [submit, author, title, text, errors]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmit(true);
      }}
      style={{
        padding: "0 30px 20px 30px",
      }}
    >
      <TextField
        onChange={(event) => {
          let tmpTitle = event.target.value;
          let existingErrors = errors;

          if (tmpTitle.length >= 50) {
            tmpTitle = tmpTitle.substring(0, 50);
          }

          if (!existingErrors.title.valid) {
            existingErrors.title.valid = true;
            existingErrors.title.helpText = "";
          }

          setErrors(existingErrors);
          setTitle(tmpTitle);
        }}
        error={!errors.title.valid}
        helperText={errors.title.helpText}
        value={title}
        id="title"
        label="Título"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          let tmpAuthor = event.target.value;
          const existingErrors = errors;

          if (tmpAuthor.length >= 50) {
            tmpAuthor = tmpAuthor.substring(0, 50);
          }

          if (!existingErrors.author.valid) {
            existingErrors.author.valid = true;
            existingErrors.author.helpText = "";
          }

          setErrors(existingErrors);
          setAuthor(tmpAuthor);
        }}
        error={!errors.author.valid}
        helperText={errors.author.helpText}
        value={author}
        id="author"
        label="Autor"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          let tmpText = event.target.value;
          const existingErrors = errors;

          if (tmpText.length >= 50) {
            tmpText = tmpText.substring(0, 50);
          }

          if (!existingErrors.text.valid) {
            existingErrors.text.valid = true;
            existingErrors.text.helpText = "";
          }

          setErrors(existingErrors);
          setText(tmpText);
        }}
        error={!errors.text.valid}
        helperText={errors.text.helpText}
        value={text}
        id="text"
        label="Texto"
        variant="outlined"
        margin="normal"
        multiline
        minRows={5}
        maxRows={80}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Publicar
      </Button>
    </form>
  );
}

export default FormularioNovoPost;
