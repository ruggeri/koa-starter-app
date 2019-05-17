import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Cat } from "./cat";

@Entity("friendships")
export class Friendship extends BaseEntity {
  @PrimaryColumn({ name: "friend_id1" })
  public friendId1: number;

  @PrimaryColumn({ name: "friend_id2" })
  public friendId2: number;

  @ManyToOne((): typeof Cat => Cat, (cat): Cat[] => cat.friends)
  @JoinColumn({ name: "friend_id1" })
  public friend1: Cat;

  @ManyToOne((): typeof Cat => Cat, (cat): Cat[] => cat.friends)
  @JoinColumn({ name: "friend_id2" })
  public friend2: Cat;
}
