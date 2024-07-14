import { Robot } from "@type/robots";

export const getMaxPrice = (robots: Robot[]): number =>
  robots.length
    ? Math.max.apply(
        null,
        robots.map((robot) => robot.price),
      )
    : 1;

export const formatNumber = (number: number | string): string => {
  let result = "";
  let c = 0;
  number = number + "";
  for (let i = number.length - 1; i >= 0; i--) {
    if (c % 3 === 0) {
      result = " " + result;
    }
    result = number[i] + result;
    c += 1;
  }
  return result;
};

export const formatPrice = (price: number): string =>
  `${formatNumber(price)} руб.`;
