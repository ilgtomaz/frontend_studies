import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NewPost from "./components/NewPost";

function Routes() {
  return (
    <Switch>
      <Route index path="/" element={<Home />} exact />
      <Route path="/novoPost" element={<NewPost />} />
    </Switch>
  );
}

export default Routes;
