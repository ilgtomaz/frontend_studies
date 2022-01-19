import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NovoPost from "./components/NovoPost";

function Routes() {
  return (
    <Switch>
      <Route index path="/" element={<Home />} exact />
      <Route path="/novoPost" element={<NovoPost />} />
    </Switch>
  );
}

export default Routes;
