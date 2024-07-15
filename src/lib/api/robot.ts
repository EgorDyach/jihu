import { FullRobot } from "@type/robots";
import { fakeRequestFullRobot } from "./fakeApi/robot";

export const requestFullRobot = async (
  robotId: string | number,
): Promise<FullRobot> => {
  return await fakeRequestFullRobot(robotId);
};
