import mongoose, { Document } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
}
interface IUserModel extends IUser, Document {}
const user = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model<IUserModel>("User", user);

export { User, IUser, IUserModel };
