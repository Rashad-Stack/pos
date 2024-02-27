import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { Product } from "src/product/schema/product.schema";
import { User } from "src/user/schema/user.schema";

@ObjectType()
@Schema()
export class Cart {
  @Field(() => ID!)
  _id: Types.ObjectId | Cart;

  @Field(() => Int!)
  @Prop({ required: true, type: Number, default: 1 })
  quantity: number;

  @Field(() => Int!)
  @Prop({ required: true, type: Number })
  totalPrice: number;

  @Field(() => ID!)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user: Types.ObjectId | User;

  @Field(() => ID!)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Product" })
  product: Types.ObjectId | Product;
}

export type CartDocument = Cart & Document;

export const CartSchema = SchemaFactory.createForClass(Cart);
