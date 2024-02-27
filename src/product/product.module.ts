import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "src/category/schema/category.schema";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";
import { Product, ProductSchema } from "./schema/product.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
