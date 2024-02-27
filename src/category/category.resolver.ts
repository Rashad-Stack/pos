import { Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { ICategory } from "./dto/category.dto";

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => ICategory)
  async getAllCategory(): Promise<ICategory> {
    return await this.categoryService.findAll();
  }
}
