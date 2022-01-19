import { Request, Response } from "express";
import { getUsedConnection } from "../database/connection";
import { PostEntity } from "../entities/post";

export class PostController {
  async get(request: Request, response: Response) {
    const connection = await getUsedConnection();
    try {
      const result = await connection.getRepository(PostEntity).find();
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error });
    }
  }

  async post(request: Request, response: Response) {
    const connection = await getUsedConnection();
    const { title, author, text } = request.body;

    try {
      const result = await connection.getRepository(PostEntity).insert({
        title,
        author,
        text
      });
      const { identifiers } = result;
      const id = identifiers[0].id
      response.status(200).json({ message: `Postagem adicionada com o id ${id}`});
    } catch (error) {
      console.log(error);
      response.status(500).json({ error });
    }
  }

  async update(request: Request, response: Response) {
    const connection = await getUsedConnection();
    const { id } = request.params;
    const { title, author, text } = request.body;

    try {
      await connection.getRepository(PostEntity).update(id, {
        title,
        author,
        text
      });
      response.status(200).json({ message: `Postagem atualizada com sucesso.`});
    } catch (error) {
      console.log(error);
      response.status(500).json({ error });
    }
  }

  async delete(request: Request, response: Response) {
    const connection = await getUsedConnection();
    const { id } = request.params;

    if (!isNaN(Number(id))) {
      try {
        const result = await connection.getRepository(PostEntity).delete({ id: Number(id) });
        return response.status(200).json({ result });
      } catch (error) {
        console.log(error);
        return response.status(500).json({ error });
      }
    }

    return response.status(404).json({ message: 'Post não encontrado.' });
  }
}
