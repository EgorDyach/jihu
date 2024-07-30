import * as Yup from "yup";
import { PostsForm } from "./types";

export const createPostPath = "/posts/create";
export const editPostPath = "/posts/:robotId/edit";

export const postCreatingInitialValue: PostsForm = {
  name: "",
  description: "",
  photos: {
    file: "",
    id: 0,
    type: "link",
  },
};

export const postCreatingValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Минимальная длина названия 3 символа")
    .required("Обязательное поле"),
  description: Yup.string().required("Обязательное поле"),
});
