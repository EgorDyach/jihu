import { useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";
import FormInput from "@components/form/FormInput";
import { AppRoutes } from "@lib/configs/routes";
import Button from "@components/Button/Button";
import Flex from "@components/Flex";
import FormEditor from "@components/form/FormEditor";
import { PostsForm } from "./types";
import OnePhotoForm from "@components/form/OnePhotoForm";

export const PostFormControls = () => {
  const { submitForm, isValid } = useFormikContext<PostsForm>();
  const navigate = useNavigate();

  return (
    <Flex $top="large" direction="column">
      <FormInput label="Название поста" name="name" />
      <FormEditor $top="medium" label="Контент" name="description" />
      <OnePhotoForm name="photos" />
      <Button
        $top="xlarge"
        type="default"
        onClick={() => navigate(AppRoutes.posts)}
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
