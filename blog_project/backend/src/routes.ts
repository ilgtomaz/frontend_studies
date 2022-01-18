import { Router } from "express";
import { PostController } from "./controllers/post";

class Routes {
  postController: PostController;
  routes: Router;

  constructor() {
    this.routes = Router();
    this.postController = new PostController();
    this.buildThePostRoute();
  }

  buildThePostRoute() {
    this.routes
      .route("/post")
      .get(this.postController.get)
      .post(this.postController.post)

    this.routes
    .route("/post/:id")
    .delete(this.postController.delete)
    .put(this.postController.update);
  }
}

export default new Routes().routes;
