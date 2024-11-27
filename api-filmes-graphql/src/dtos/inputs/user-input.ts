import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field()
  username: String;

  @Field()
  password: String;

  @Field()
  email: String;

  @Field()
  birthdate: Date;
}
