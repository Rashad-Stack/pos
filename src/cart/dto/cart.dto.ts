import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";
import { Product } from "src/product/schema/product.schema";
import { User } from "src/user/schema/user.schema";
import { Cart } from "../schema/cart.schema";

@ObjectType("allCarts")
export class ICart {
  @Field(() => Int)
  total: number;

  @Field(() => Int!)
  @IsNotEmpty()
  pages: number;

  @Field(() => [Cart])
  carts: Cart[];
}

@InputType()
export class CartInput {
  @Field(() => ID!)
  @IsNotEmpty()
  user: Types.ObjectId | User;

  @Field(() => ID!)
  @IsNotEmpty()
  product: Types.ObjectId | Product;

  @Field(() => Int!)
  @IsNotEmpty()
  totalPrice: number;
}
