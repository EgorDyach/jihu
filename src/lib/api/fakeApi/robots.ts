import { Robot } from "@type/robots";

const fakeRobotsArr: Robot[] = [
  {
    id: 1,
    name: "robot 1",
    short_description: "qkwepkqw[ekqke[qkwe[qwke[kqw",
    price: 10000,
  },
  {
    id: 2,
    name: "robot 2",
    short_description: "qkwepkqw[ekqke[qkwe[qwke[kqw",
    price: 14000,
  },
  {
    id: 3,
    name: "robot 3",
    short_description: "qkwepkqw[ekqke[qkwe[qwke[kqw",
    price: 3000,
  },
  {
    id: 4,
    name: "robot 4",
    short_description: "qkwepkqw[ekqke[qkwe[qwke[kqw",
    price: 59900,
  },
  {
    id: 5,
    name: "robot 5",
    short_description: "qkwepkqw[ekqke[qkwe[qwke[kqw",
    price: 25900,
  },
];

export const fakeRequestRobots = (isError?: boolean): Promise<Robot[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) reject("Ошибка в получении данных!");
      resolve(fakeRobotsArr);
    }, 1000);
  });
};
