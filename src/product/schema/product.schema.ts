import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { Category } from "src/category/schema/category.schema";

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

  @Field(() => Category)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category" })
  category: Types.ObjectId | Category;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
