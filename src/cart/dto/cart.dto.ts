import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Cart } from "../schema/cart.schema";

@ObjectType("allCarts")
export class ICart {
  @Field(() => Int)
  total: number;

  @Field(() => Int!)
  @IsNotEmpty()
  pages: number;

  @Field(() => Int!)
  @IsNotEmpty()
  subtotal: number;

  @Field(() => [Cart])
  carts: Cart[];
}
