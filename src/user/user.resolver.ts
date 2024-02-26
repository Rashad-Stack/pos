import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput, Signup } from "./dto/user.dto";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Signup)
  async createUser(
    @Args("createUserInput") createUserInput: CreateUserInput,
  ): Promise<Signup> {
    const user = await this.userService.create(createUserInput);

    return {
      user,
      message: "User created successfully",
    };
  }

  @Query(() => String, { name: "users" })
  findAll(): string {
    return "This action returns all users";
  }
}
