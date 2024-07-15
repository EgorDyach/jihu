import { fakeRequestLogin } from "./fakeApi/admin";

export const requestLogin = async (
  login: string,
  password: string,
): Promise<string> => {
  return await fakeRequestLogin(login, password);
};
