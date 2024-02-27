import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@ObjectType()
@Schema()
export class Product {
  @Field(() => ID!)
  _id: Types.ObjectId | Product;

  @Field(() => String!)
  @Prop({ unique: true, required: true, type: String })
  name: string;

  @Field(() => Int!)
  @Prop({ required: true, type: Number })
  price: number;

  @Field(() => String!)
  @Prop({ required: true, type: String })
  image: string;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
