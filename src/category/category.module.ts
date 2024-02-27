import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductService } from "src/product/product.service";
import { Product, ProductSchema } from "src/product/schema/product.schema";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";
import { Category, CategorySchema } from "./schema/category.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  providers: [CategoryResolver, CategoryService, ProductService],
})
export class CategoryModule {}
