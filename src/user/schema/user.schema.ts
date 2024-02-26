import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Document, Types } from "mongoose";

@ObjectType()
@Schema({
  timestamps: true,
  methods: {
    async comparePassword(
      this: UserDocument,
      password: string,
    ): Promise<boolean> {
      return await bcrypt.compareSync(password, this.password);
    },

    createAuthToken(this: UserDocument): string {
      return jwt.sign(
        { id: this._id, role: this.role },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      );
    },
  },
})
export class User {
  @Field(() => ID!)
  _id: Types.ObjectId | User;

  @Field(() => String!)
  @Prop({ unique: true, required: true, type: String })
  email: string;

  @Field(() => String!)
  @Prop({ length: 8, select: false, required: true, type: String })
  password: string;

  @Field(() => String!)
  @Prop({ default: "user", required: true, type: String }) // Default value for role
  role: string;

  readonly comparePassword: (password: string) => Promise<boolean>;
  readonly createAuthToken: () => string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

// Hash the password before saving the user
UserSchema.pre("save", function (next) {
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});
