import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { CartService } from "./cart.service";
import { ICart } from "./dto/cart.dto";

@Resolver()
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Query(() => ICart)
  async allCarts(
    @Args("limit", { type: () => Int, defaultValue: 10 }) limit: number,
    @Args("page", { type: () => Int, defaultValue: 1 }) page: number,
  ): Promise<ICart> {
    return await this.cartService.findAll(limit, page);
  }
}
