import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { User } from "../schema/user.schema";

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

@ObjectType()
export class Signup {
  @Field(() => User)
  user: User;

  @Field(() => String)
  message: string;
}
