import { ObjectType } from "@nestjs/graphql";
import { Schema, SchemaFactory } from "@nestjs/mongoose";

@ObjectType()
@Schema()
export class Product {}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
