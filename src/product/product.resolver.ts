import { Args, ID, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Category } from "src/category/schema/category.schema";
import { IProduct, ProductInput } from "./dto/product.dto";
import { ProductService } from "./product.service";
import { Product } from "./schema/product.schema";

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => IProduct)
  async allProducts(
    @Args("limit", { type: () => Int, defaultValue: 20 }) limit: number,
    @Args("page", { type: () => Int, defaultValue: 1 }) page: number,
    @Args("filter", { type: () => ID, nullable: true }) filter: Category,
    @Args("search", { type: () => String, nullable: true }) search: string,
  ): Promise<IProduct> {
    return await this.productService.findAll(limit, page, filter, search);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args("productInput") productInput: ProductInput,
  ): Promise<Product> {
    return await this.productService.createProduct(productInput);
  }
}
