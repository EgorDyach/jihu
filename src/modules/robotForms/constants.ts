import * as Yup from "yup";
import { RobotForm } from "./types";

const DEFAULT_CONTACTS = "Телеграмм: @example_com";

export const createRobotPath = "/shop/create";
export const editRobotPath = "/shop/:robotId/edit";

export const robotCreatingInitialValue: RobotForm = {
  name: "",
  short_description: "",
  full_description: "",
  price: 0,
  contscts: DEFAULT_CONTACTS,
  images: [],
};

export const robotCreatingValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Минимальная длина названия 3 символа")
    .required("Обязательное поле"),
  short_description: Yup.string().required("Обязательное поле"),
  full_description: Yup.string().required("Обязательное поле"),
  price: Yup.number().min(0, "Цена должна быть неотрицательной"),
});
