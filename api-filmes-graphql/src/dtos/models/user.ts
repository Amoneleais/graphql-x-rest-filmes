import { Field, ObjectType } from "type-graphql";
import { IUser } from "./interfaces/user";

@ObjectType()
export class User implements IUser {
  @Field()
  id: String;

  @Field()
  username: String;

  @Field()
  password: String;

  @Field()
  email: String;

  @Field()
  birthdate: Date;
}
