export type RobotFormPayload = {
  name: string;
  short_description: string;
  full_description: string;
  price: number;
  contscts: string;
  images: File[];
};

export type RobotForm = {
  name: string;
  short_description: string;
  full_description: string;
  price: number;
  contscts: string;
  images: { file: File; id: number }[];
};
