/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormRef } from "@hooks/useFormRef";
import { useNavigate, useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { useCallbackOnce } from "@hooks/useCallbackOnce";
import { toast } from "react-toastify";
import { AppRoutes } from "@lib/configs/routes";
import { PostsForm, PostsFormEdit } from "./types";
import AppFormik from "@components/form/AppFormik";
import { PostFormControls } from "./PostFormControls";
import { Header, ItemTitle } from "@components/Typography";
import Breadcrumb from "@components/Breadcrumb";
import Flex from "@components/Flex";
import styled from "styled-components";
import { requestEditPost, requestFullPost } from "@lib/api/posts";
import PageNotFound from "@modules/pageNotFound/PageNotFound";
import ContentLoader from "@components/ContentLoader";
import { postCreatingValidationSchema } from "./constants";

const FormContainer = styled(Flex)`
  max-width: 750px;
`;

export const EditPostPath = "/shop/:postId/edit";

const EditPostPage: FC = () => {
  const { postId = "" } = useParams();
  const [post, setPost] = useState<PostsForm | null>(null);
  const [isPostLoading, setIsPostLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setIsPostLoading(true);
      try {
        const response = await requestFullPost(postId);
        setPost({
          ...response,
          photos: {
            id: Math.floor(Math.random() * 1000000),
            type: "link",
            file: response.photo_link,
          },
        });
      } catch (error) {
        console.log(error);
        toast("❌ Не удалось получить информацию о посте!");
      } finally {
        setIsPostLoading(false);
      }
    })();
  }, [postId]);
  const navigate = useNavigate();
  const formRef = useFormRef<PostsFormEdit>();
  const handleSubmit = useCallbackOnce(async (values: PostsForm) => {
    if (!values) return;
    try {
      await requestEditPost(
        {
          ...values,
          photos: values.photos.file,
        },
        postId,
      );
      toast("✅ Робот успешно изменен!");
      navigate(AppRoutes.posts);
    } catch (e) {
      toast("❌ Не удалось изменить робота!");
    }
  });

  if (isPostLoading) return <ContentLoader />;

  if (!post) {
    navigate(AppRoutes.adminCreate);
    return <PageNotFound />;
  }

  return (
    <FormContainer direction="column">
      <Breadcrumb
        items={[
          {
            title: "Роботы",
            path: AppRoutes.shop,
          },
          {
            title: "Создание робота",
          },
        ]}
      />
      <Header $top="medium">Создание робота</Header>
      <AppFormik
        validateOnMount={true}
        onSubmit={handleSubmit}
        innerRef={formRef as any}
        initialValues={post}
        validationSchema={postCreatingValidationSchema}
      >
        <Flex direction="column">
          <PostFormControls />
          <ItemTitle $top="xlarge">Карточка робота</ItemTitle>
        </Flex>
      </AppFormik>
    </FormContainer>
  );
};

export default EditPostPage;
