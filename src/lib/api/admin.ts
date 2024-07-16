import { fakeRequestLogin } from "./fakeApi/admin";
import { fakeRequestRemoveRobot } from "./fakeApi/robots";

export const requestLogin = async (
  login: string,
  password: string,
): Promise<string> => {
  return await fakeRequestLogin(login, password);
};

export const requestRemoveRobot = async (
  id: string | number,
): Promise<void> => {
  return await fakeRequestRemoveRobot(id);
};
