import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 25,
  })
  name: string;

  @Column({
    length: 30,
  })
  email: string;

  @Column({
    length: 300,
  })
  message: string;
}
