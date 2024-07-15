export type Robot = {
  id: number;
  name: string;
  short_description: string;
  price: number;
};

export type TypeOfShop = "FILTER" | "SORT";

export type FullRobot = {
  id: number;
  name: string;
  short_description: string;
  full_description: string;
  contacts: string;
  price: number;
  photos: string[];
};
