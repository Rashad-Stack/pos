import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  Category,
  CategoryDocument,
} from "src/category/schema/category.schema";
import { IProduct, ProductInput } from "./dto/product.dto";
import { Product, ProductDocument } from "./schema/product.schema";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async findAll(
    limit: number,
    page: number,
    filter: Category,
    search: string,
  ): Promise<IProduct> {
    const promise = this.productModel.find();

    const count = this.productModel.countDocuments();

    if (search) {
      promise.or([{ name: { $regex: search, $options: "i" } }]);
      count.or([{ name: { $regex: search, $options: "i" } }]);
    }

    if (filter) {
      promise.or([{ category: filter }]);
      count.or([{ category: filter }]);
    }

    const products = await promise
      .populate("category")
      .limit(limit)
      .skip(limit * (page - 1))
      .exec();

    const total = await count.exec();

    const pages = Math.ceil(total / limit);

    return { total, pages, products };
  }

  async createProduct(productInput: ProductInput): Promise<Product> {
    const newProduct = new this.productModel(productInput);

    const [product] = await Promise.all([
      await newProduct.save(),
      await this.categoryModel.findOneAndUpdate(newProduct.category, {
        $push: { products: newProduct._id },
      }),
    ]);

    return product;
  }
}
