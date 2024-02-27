import { UseGuards } from "@nestjs/common";
import { Args, ID, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Types } from "mongoose";
import { AuthGuard } from "src/auth/auth.guard";
import { CurrentUser } from "src/auth/current.user.decorator";
import { User } from "src/user/schema/user.schema";
import { CartService } from "./cart.service";
import { ICart } from "./dto/cart.dto";
import { Cart } from "./schema/cart.schema";

@Resolver()
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Query(() => ICart)
  @UseGuards(AuthGuard)
  async allCarts(
    @Args("limit", { type: () => Int, defaultValue: 10 }) limit: number,
    @Args("page", { type: () => Int, defaultValue: 1 }) page: number,
    @CurrentUser() user: Types.ObjectId,
  ): Promise<ICart> {
    return await this.cartService.findAll(limit, page, user);
  }

  @Mutation(() => Cart)
  @UseGuards(AuthGuard)
  async addToCart(
    @Args("productId", { type: () => ID }) productId: Types.ObjectId,
    @CurrentUser() user: User,
  ): Promise<Cart> {
    return await this.cartService.addToCart(productId, user);
  }

  @Mutation(() => Cart)
  @UseGuards(AuthGuard)
  async increaseQuantity(
    @Args("productId", { type: () => ID! }) productId: Types.ObjectId,
    @CurrentUser() user: Types.ObjectId,
  ): Promise<Cart> {
    return await this.cartService.incQuantity(productId, user);
  }

  @Mutation(() => Cart)
  @UseGuards(AuthGuard)
  async decreaseQuantity(
    @Args("productId", { type: () => ID! }) productId: Types.ObjectId,
    @CurrentUser() user: Types.ObjectId,
  ): Promise<Cart> {
    return await this.cartService.dcQuantity(productId, user);
  }

  @Mutation(() => Cart)
  @UseGuards(AuthGuard)
  async removeFromCart(
    @Args("productId", { type: () => ID! }) productId: Types.ObjectId,
    @CurrentUser() user: Types.ObjectId,
  ): Promise<Cart> {
    return await this.cartService.removeFromCart(productId, user);
  }
}
