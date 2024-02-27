import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "src/product/schema/product.schema";
import { CartResolver } from "./cart.resolver";
import { CartService } from "./cart.service";
import { Cart, CartSchema } from "./schema/cart.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cart.name, schema: CartSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  providers: [CartResolver, CartService],
})
export class CartModule {}
