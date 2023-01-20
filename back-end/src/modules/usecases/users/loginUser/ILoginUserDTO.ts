import { IRefreshTokenModel } from "../../../entities/RefreshToken";

interface ILoginUserRequestDTO {
  username: string;
  password: string;
}
interface ILoginUserResponseDTO {
  token: string;
  refreshToken?: IRefreshTokenModel | null | undefined;
}

export { ILoginUserRequestDTO, ILoginUserResponseDTO };
