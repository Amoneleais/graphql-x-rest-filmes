import { Field, ObjectType } from "type-graphql";
import { IMovie } from "./interfaces/movie";

@ObjectType()
export class Movie implements IMovie {
  @Field()
  id: String;

  @Field()
  title: String;

  @Field()
  director: String;

  @Field()
  release_date: Date;
}
