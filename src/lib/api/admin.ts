import { RobotFormPayload } from "@modules/robotForms/types";
import { fakeRequestLogin } from "./fakeApi/admin";
import {
  fakeRequestCreateRobot,
  fakeRequestRemoveRobot,
} from "./fakeApi/robots";

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

export const requestCreateRobot = async (
  robotPayload: RobotFormPayload,
): Promise<void> => {
  return await fakeRequestCreateRobot(robotPayload);
};
