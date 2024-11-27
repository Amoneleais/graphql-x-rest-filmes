import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user-resolver";
import { MovieResolver } from "./resolvers/movie-resolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver, MovieResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });
  const server = new ApolloServer({ schema });
  const { url } = await server.listen();
  console.log(`\x1b[35m\n🚀 HTTP server running on ${url}\x1b[34m`);
}

main();
