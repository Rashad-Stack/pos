import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthService } from "src/auth/auth.service";
import { Product, ProductSchema } from "src/product/schema/product.schema";
import { User, UserSchema } from "src/user/schema/user.schema";
import { UserService } from "src/user/user.service";
import { CartResolver } from "./cart.resolver";
import { CartService } from "./cart.service";
import { Cart, CartSchema } from "./schema/cart.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cart.name, schema: CartSchema },
      { name: Product.name, schema: ProductSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [CartResolver, CartService, AuthService, UserService],
})
export class CartModule {}
