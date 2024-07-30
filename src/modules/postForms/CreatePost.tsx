import { useFormRef } from "@hooks/useFormRef";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { useCallbackOnce } from "@hooks/useCallbackOnce";
import { toast } from "react-toastify";
import { AppRoutes } from "@lib/configs/routes";
import AppFormik from "@components/form/AppFormik";
import { PostFormControls } from "./PostFormControls";
import { Header } from "@components/Typography";
import Breadcrumb from "@components/Breadcrumb";
import Flex from "@components/Flex";
import styled from "styled-components";
import { PostsForm } from "./types";
import { requestCreatePost } from "@lib/api/posts";
import {
  postCreatingInitialValue,
  postCreatingValidationSchema,
} from "./constants";

const FormContainer = styled(Flex)`
  max-width: 750px;
`;

const CreatePostPage: FC = () => {
  const navigate = useNavigate();
  const formRef = useFormRef<PostsForm>();
  const handleSubmit = useCallbackOnce(async (values: PostsForm) => {
    if (!values) return;
    try {
      await requestCreatePost({
        ...values,
        photos: values.photos.file,
      });
      toast("✅ Пост успешно создан!");
      navigate(AppRoutes.shop);
    } catch (e) {
      toast("❌ Не удалось создать пост!");
    }
  });

  return (
    <FormContainer direction="column">
      <Breadcrumb
        items={[
          {
            title: "Материалы и посты",
            path: AppRoutes.posts,
          },
          {
            title: "Создание поста",
          },
        ]}
      />
      <Header $top="medium">Создание поста</Header>
      <AppFormik
        validateOnMount={true}
        onSubmit={handleSubmit}
        innerRef={formRef}
        initialValues={postCreatingInitialValue}
        validationSchema={postCreatingValidationSchema}
      >
        <Flex direction="column">
          <PostFormControls />
        </Flex>
      </AppFormik>
    </FormContainer>
  );
};

export default CreatePostPage;
