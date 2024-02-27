import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICategory } from "./dto/category.dto";
import { Category, CategoryDocument } from "./schema/category.schema";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async findAll(limit: number, page: number): Promise<ICategory> {
    const categories = await this.categoryModel
      .find()
      .limit(limit)
      .skip(limit * (page - 1))
      .exec();
    const total = await this.categoryModel.countDocuments().exec();
    const pages = Math.ceil(total / limit);
    return { total, pages, categories };
  }
}
