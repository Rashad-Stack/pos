import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { Response } from "express";
import { UserService } from "src/user/user.service";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { LoggedInUser, LoginInput } from "./dto/auth.dto";

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => LoggedInUser)
  async login(
    @Args("loginInput") loginInput: LoginInput,
    @Context() { res }: { res: Response },
  ): Promise<LoggedInUser> {
    // Create a new user
    const data = await this.authService.login(loginInput);

    // Send the token as a cookie
    this.authService.sendTokenCookies(res, data.token);

    // Return the user and a message
    return {
      user: data.user,
      message: "Login successful!",
    };
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async logout(@Context() { res }: { res: Response; req: Request }) {
    res.clearCookie("token");
    return "Logout successful!";
  }
}
