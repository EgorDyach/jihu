import { Robot } from "@type/robots";
import { fakeRequestRobots } from "./fakeApi/robots";

export const requestRobots$ = async (): Promise<Robot[]> => {
  return await fakeRequestRobots();
};
