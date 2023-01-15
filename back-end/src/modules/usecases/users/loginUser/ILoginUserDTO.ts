interface ILoginUserRequestDTO {
  username: string;
  password: string;
}
interface ILoginUserResponseDTO {
  token: string;
}

export { ILoginUserRequestDTO, ILoginUserResponseDTO };
