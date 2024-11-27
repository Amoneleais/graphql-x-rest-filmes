import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import { UserInput } from "../dtos/inputs/user-input";
import { User } from "../dtos/models/user";

const Users: User[] = [];

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  async users(@Arg("id", { nullable: true }) id?: number): Promise<User[]> {
    if (id != null) {
      const user = Users.find((user) => user.id === String(id));
      return user ? [user] : [];
    }
    return Users;
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: UserInput) {
    const user = {
      id: String(Users.length + 1),
      username: data.username,
      password: data.password,
      email: data.email,
      birthdate: data.birthdate,
    };
    Users.push(user);
    return user;
  }

  @Mutation(() => User, { nullable: true })
  async updateUser(@Arg("id") id: Number, @Arg("data") data: UserInput) {
    const userIndex = Users.findIndex((user) => user.id === String(id));
    if (userIndex < 0) return null;
    Users[userIndex] = {
      ...Users[userIndex],
      ...data,
    };
    return Users[userIndex];
  }

  @Mutation(() => User, { nullable: true })
  async deleteUser(@Arg("id") id: Number) {
    const userIndex = Users.findIndex((user) => user.id === String(id));
    if (userIndex < 0) return null;
    Users.splice(userIndex, 1);
    return Users[userIndex];
  }
}
