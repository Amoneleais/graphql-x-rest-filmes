import { Field, InputType } from "type-graphql";

@InputType()
export class MovieInput {
  @Field()
  title: String;

  @Field()
  director: String;

  @Field()
  release_date: Date;
}
