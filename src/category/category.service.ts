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

  async findAll(): Promise<ICategory> {
    const categories = await this.categoryModel.find().exec();
    const total = await this.categoryModel.countDocuments().exec();
    const pages = Math.ceil(total / 10);
    return { total, pages, categories };
  }
}
