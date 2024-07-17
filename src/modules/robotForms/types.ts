export type RobotFormPayload = {
  name: string;
  short_description: string;
  full_description: string;
  price: number;
  contacts: string;
  photos: (string | File)[];
};

export type RobotForm = {
  name: string;
  short_description: string;
  full_description: string;
  price: number;
  contacts: string;
  photos: { file: File | string; id: number }[];
};

export type RobotFormEdit = {
  name: string;
  short_description: string;
  full_description: string;
  price: number;
  contacts: string;
  photos: (string | File)[];
};
