import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { ICategory } from "./dto/category.dto";

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => ICategory)
  async getAllCategory(
    @Args("limit", { type: () => Int, defaultValue: 10 }) limit: number,
    @Args("page", { type: () => Int, defaultValue: 1 }) page: number,
  ): Promise<ICategory> {
    return await this.categoryService.findAll(limit, page);
  }
}
