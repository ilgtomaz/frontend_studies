import React from "react";
import { Container, Typography } from "@material-ui/core";
import { containerStyle } from "../../App";
import FormularioNovoPost from "../FormularioNovoPost";
import Menu from "../Menu";

function NovoPost() {
  return (
    <>
      <Container maxWidth="sm" style={containerStyle}>
        <Menu />
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{
            marginTop: "20px",
          }}
        >
          Novo Post
        </Typography>
        <FormularioNovoPost />
      </Container>
    </>
  );
}

export default NovoPost;
