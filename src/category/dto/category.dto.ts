import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Category } from "../schema/category.schema";

@ObjectType()
export class ICategory {
  @Field(() => Int)
  total: number;

  @Field(() => Int!)
  @IsNotEmpty()
  pages: number;

  @Field(() => [Category])
  products: Category[];
}
