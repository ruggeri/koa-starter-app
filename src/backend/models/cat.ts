import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @ManyToMany((type) => Cat)
  @JoinTable({
    name: "friendships",
    joinColumn: { name: "friend_id1" },
    inverseJoinColumn: { name: "friend_id2" },
  })
  public friends: Cat[];
}
