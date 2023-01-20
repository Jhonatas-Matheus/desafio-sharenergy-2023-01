import mongoose, { Document } from "mongoose";

import { IUserModel } from "./User";

interface IRefreshToken {
  expiresIn: number;
  user: IUserModel;
}
interface IRefreshTokenModel extends IRefreshToken, Document {}

const refreshToken = new mongoose.Schema<IRefreshToken>({
  expiresIn: { type: Number },
  user: {
    unique: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const RefreshToken = mongoose.model<IRefreshTokenModel>(
  "RefreshToken",
  refreshToken
);
export { IRefreshToken, IRefreshTokenModel, RefreshToken };
