import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import { MovieInput } from "../dtos/inputs/movie-input";
import { Movie } from "../dtos/models/movie";

const Movies: Movie[] = [];

@Resolver(() => Movie)
export class MovieResolver {
  @Query(() => [Movie])
  async movies(@Arg("id", { nullable: true }) id?: number): Promise<Movie[]> {
    if (id != null) {
      const movie = Movies.find((movie) => movie.id === String(id));
      return movie ? [movie] : [];
    }
    return Movies;
  }

  @Mutation(() => Movie)
  async createMovie(@Arg("data") data: MovieInput) {
    const movie = {
      id: String(Movies.length + 1),
      title: data.title,
      director: data.director,
      release_date: data.release_date,
    };
    Movies.push(movie);
    return movie;
  }

  @Mutation(() => Movie, { nullable: true })
  async updateMovie(@Arg("id") id: Number, @Arg("data") data: MovieInput) {
    const movieIndex = Movies.findIndex((movie) => movie.id === String(id));
    if (movieIndex < 0) return null;
    Movies[movieIndex] = {
      ...Movies[movieIndex],
      ...data,
    };
    return Movies[movieIndex];
  }

  @Mutation(() => Movie, { nullable: true })
  async deleteMovie(@Arg("id") id: Number) {
    const movieIndex = Movies.findIndex((movie) => movie.id === String(id));
    if (movieIndex < 0) return null;
    Movies.splice(movieIndex, 1);
    return Movies[movieIndex];
  }
}
