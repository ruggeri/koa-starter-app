import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cats")
export class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: "first_name" })
  public firstName: string;

  @Column({ name: "last_name" })
  public lastName: string;

  @Column({ name: "age" })
  public age: number;
}
