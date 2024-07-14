import { Robot } from "@type/robots";

export const getMaxPrice = (robots: Robot[]): number =>
  robots.length
    ? Math.max.apply(
        null,
        robots.map((robot) => robot.price),
      )
    : 1;
