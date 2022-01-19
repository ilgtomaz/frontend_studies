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
  title: string = '';

  @Column({
    type: 'varchar'
  })
  author: string = '';

  @Column({
    type: 'varchar'
  })
  text: string = '';
}