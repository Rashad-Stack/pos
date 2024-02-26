import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserInput } from "./dto/user.dto";
import { User, UserDocument } from "./schema/user.schema";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      // Create a new instance of the User entity and set its properties
      const user = new this.userModel(createUserInput);

      // Save the user entity to the database
      await user.save();

      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException("Email already exists", {
          cause: new Error(),
        });
      }

      throw new InternalServerErrorException(error);
    }
  }
}
