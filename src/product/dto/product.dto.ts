import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";
import { Category } from "src/category/schema/category.schema";
import { Product } from "../schema/product.schema";

@ObjectType("allProducts")
export class IProduct {
  @Field(() => Int)
  total: number;

  @Field(() => Int!)
  @IsNotEmpty()
  pages: number;

  @Field(() => [Product])
  products: Product[];
}

@InputType()
export class ProductInput {
  @Field(() => ID!)
  @IsNotEmpty()
  category: Types.ObjectId | Category;

  @Field(() => String!)
  @IsNotEmpty()
  name: string;

  @Field(() => String!)
  @IsNotEmpty()
  image: string;

  @Field(() => Int!)
  @IsNotEmpty()
  price: number;
}
