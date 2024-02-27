import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Product, ProductDocument } from "src/product/schema/product.schema";
import { User } from "src/user/schema/user.schema";
import { ICart } from "./dto/cart.dto";
import { Cart, CartDocument } from "./schema/cart.schema";

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<CartDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async findAll(limit: number, page: number): Promise<ICart> {
    const carts = await this.cartModel
      .find()
      .populate("product")
      .populate("user")
      .limit(limit)
      .skip((page - 1) * limit);

    const total = await this.cartModel.countDocuments();
    const pages = Math.ceil(total / limit);

    return { total, pages, carts };
  }

  async addToCart(productId: Types.ObjectId, user: User): Promise<Cart> {
    try {
      const product = await this.productModel.findById(productId);

      if (!product) {
        throw new NotFoundException("Product not found");
      }

      const newCart = new this.cartModel({
        totalPrice: product.price,
        user: user,
        product: product,
      });

      return newCart.save();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
