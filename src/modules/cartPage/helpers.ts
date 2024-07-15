import { Robot } from "@type/robots";

export const getFullPrice = (robots: Robot[]) =>
  robots.map((robot) => robot.price).reduce((prev, curr) => prev + curr, 0);
