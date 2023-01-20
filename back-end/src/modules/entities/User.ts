import mongoose, { Document } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
}
interface IUserModel extends IUser, Document {}
const user = new mongoose.Schema<IUser>(
  {
    username: { unique: true, type: String, required: true },
    email: { unique: true, type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model<IUserModel>("User", user);

export { User, IUser, IUserModel };
