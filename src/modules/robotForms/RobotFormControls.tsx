import { useFormikContext } from "formik";
import { RobotForm } from "./types";
import { useNavigate } from "react-router-dom";
import FormInput from "@components/form/FormInput";
import { AppRoutes } from "@lib/configs/routes";
import Button from "@components/Button/Button";
import Flex from "@components/Flex";
import FormEditor from "@components/form/FormEditor";
import FormPhotos from "@components/form/PhotoForm";

export const RobotFormControls = () => {
  const { submitForm, isValid } = useFormikContext<RobotForm>();
  const navigate = useNavigate();

  return (
    <Flex $top="large" direction="column">
      <FormInput label="Название робота" name="name" />
      <FormInput
        $top="medium"
        label="Краткое описание"
        name="short_description"
      />
      <FormEditor
        $top="medium"
        label="Полное описание"
        name="full_description"
      />
      <FormInput $top="medium" type="number" name="price" label="Цена" />
      <FormPhotos name="photos" />
      <Button
        $top="xlarge"
        type="default"
        onClick={() => navigate(AppRoutes.shop)}
      >
        Отмена
      </Button>
      <Button
        $top="medium"
        type="primary"
        onClick={submitForm}
        disabled={!isValid}
      >
        Сохранить
      </Button>
    </Flex>
  );
};
