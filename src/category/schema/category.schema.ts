import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";
import { Product } from "src/product/schema/product.schema";

@ObjectType()
@Schema()
export class Category {
  @Field(() => ID!)
  _id: Types.ObjectId | Category;

  @Field(() => String!)
  @Prop({ unique: true, required: true, type: String })
  name: string;

  @Field(() => [Product])
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }])
  products: Types.ObjectId[] | Product[];
}

export type CategoryDocument = Category & Document;

export const CategorySchema = SchemaFactory.createForClass(Category);
