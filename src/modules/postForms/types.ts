export type PostsFormPayload = {
  name: string;
  description: string;
  photos: string | File;
};

export type PostsForm = {
  name: string;
  description: string;
  photos: { file: File | string; id: number; type: "link" | "file" };
};

export type PostsFormEdit = {
  name: string;
  description: string;
  photos: string | File;
};
