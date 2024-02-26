import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";
import { User } from "src/user/schema/user.schema";

@InputType()
export class LoginInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;
}

@ObjectType("LoggedInUser")
export class LoggedInUser {
  @Field(() => User)
  user: User;

  @Field(() => String)
  message: string;
}
