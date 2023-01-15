// import dayjs from "dayjs";

// import { AppError } from "../errors/AppError";
// import { RefreshToken } from "../modules/entities/RefreshToken";
// import { User } from "../modules/entities/User";

// class GenerateRefreshToken {
//   async execute(userId: string) {
//     const userFoundById = await User.findOne({ id: userId }).select(
//       "-password"
//     );
//     const expiresIn = dayjs().add(15, "second").unix();
//     const generateRefreshToken = new RefreshToken({
//       user: userFoundById,
//       expiresIn,
//     });
//     try {
//       generateRefreshToken.save();
//       const tokenFound = await RefreshToken.findOne({ generateRefreshToken });
//       tokenFound;
//       return generateRefreshToken;
//     } catch (error) {
//       throw new AppError(error as string);
//     }
//   }
// }

// export { GenerateRefreshToken };
