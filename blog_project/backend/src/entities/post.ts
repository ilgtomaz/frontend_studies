import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Post } from "../interfaces/post";

@Entity("post")
export class PostEntity {
  @PrimaryGeneratedColumn({
    type: 'integer'
  })
  id: number = 0;

  @Column({
    type: 'varchar'
  })
  titulo: string = '';

  @Column({
    type: 'varchar'
  })
  autor: string = '';

  @Column({
    type: 'varchar'
  })
  texto: string = '';
}