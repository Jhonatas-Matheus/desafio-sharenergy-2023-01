import mongoose, { Document } from "mongoose";

import { IUserModel } from "./User";

interface IRefreshToken {
  expiresIn: number;
  user: IUserModel;
}
interface IRefreshTokenModel extends IRefreshToken, Document {}

const user = new mongoose.Schema<IRefreshTokenModel>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
