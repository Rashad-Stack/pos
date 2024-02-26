import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { join } from "path";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.NODE_ENV === "development" ? true : false,
      include: [],
      context: ({ req, res }) => ({ req, res }),

      // Code first
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
    }),

    UserModule,

    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
