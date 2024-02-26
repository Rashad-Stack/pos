import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
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

  async findOne(userId: Types.ObjectId): Promise<User> {
    try {
      const user = await this.userModel.findOne({
        _id: userId,
      });
      if (!user) {
        throw new NotFoundException("user does not exist!", {
          cause: new Error("Invalid credentials!"),
        });
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
