import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
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

  async findAll(
    limit: number,
    page: number,
    user: Types.ObjectId,
  ): Promise<ICart> {
    try {
      const carts = await this.cartModel
        .find({
          user,
        })
        .populate("product")
        .populate("user")
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip((page - 1) * limit);

      const total = await this.cartModel.countDocuments({
        user,
      });

      // Calculate subtotal
      const totalCartAmount = await this.cartModel.aggregate([
        {
          $match: {
            user: new Types.ObjectId(user),
          },
        },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$totalPrice",
            },
          },
        },
      ]);

      const pages = Math.ceil(total / limit);
      const subtotal = totalCartAmount[0]?.total || 0;

      return {
        total,
        pages,
        subtotal,
        carts,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
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

  async incQuantity(
    cartId: Types.ObjectId,
    user: Types.ObjectId,
  ): Promise<Cart> {
    try {
      const cart = await this.cartModel
        .findOneAndUpdate(
          {
            _id: cartId,
            user: user,
          },
          { $inc: { quantity: 1 } }, // Increment quantity by 1
          { new: true }, // Return the updated document
        )
        .populate("product");

      if (!cart) {
        throw new NotFoundException("Cart not found");
      }

      // Calculate new total price based on the updated quantity and product's price
      const product = cart.product as ProductDocument;
      const newTotalPrice = cart.quantity * product.price;

      // Update the total price
      cart.totalPrice = newTotalPrice;
      await cart.save();

      return cart;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async dcQuantity(
    cartId: Types.ObjectId,
    user: Types.ObjectId,
  ): Promise<Cart> {
    try {
      const cart = await this.cartModel
        .findOneAndUpdate(
          {
            _id: cartId,
            user: user,
            quantity: { $gt: 1 }, // Quantity should be greater than 1
          },
          { $inc: { quantity: -1 } }, // Decrement quantity by 1
          { new: true }, // Return the updated document
        )
        .populate("product");

      if (!cart) {
        throw new NotFoundException("Cart not found");
      }

      // Calculate new total price based on the updated quantity and product's price
      const product = cart.product as ProductDocument;
      const newTotalPrice = cart.quantity * product.price;

      // Update the total price
      cart.totalPrice = newTotalPrice;
      await cart.save();

      return cart;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async removeFromCart(
    cartId: Types.ObjectId,
    user: Types.ObjectId,
  ): Promise<Cart> {
    try {
      const cart = await this.cartModel.findOneAndDelete({
        _id: cartId,
        user,
      });

      if (!cart) {
        throw new NotFoundException("Cart not found");
      }

      return cart;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
