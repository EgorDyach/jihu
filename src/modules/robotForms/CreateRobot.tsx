import { useFormRef } from "@hooks/useFormRef";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { useCallbackOnce } from "@hooks/useCallbackOnce";
import { toast } from "react-toastify";
import { AppRoutes } from "@lib/configs/routes";
import { requestCreateRobot } from "@lib/api/admin";
import { RobotForm } from "./types";
import AppFormik from "@components/form/AppFormik";
import { RobotFormControls } from "./RobotFormControls";
import {
  robotCreatingInitialValue,
  robotCreatingValidationSchema,
} from "./constants";
import { Header, ItemTitle } from "@components/Typography";
import Breadcrumb from "@components/Breadcrumb";
import Flex from "@components/Flex";
import { FakeRobotCard } from "./FakeRobotCard";
import styled from "styled-components";

const FormContainer = styled(Flex)`
  max-width: 750px;
`;

const CreateRobotPage: FC = () => {
  const navigate = useNavigate();
  const formRef = useFormRef<RobotForm>();
  const handleSubmit = useCallbackOnce(async (values: RobotForm) => {
    if (!values) return;
    try {
      await requestCreateRobot({
        ...values,
        images: values.images.map((el) => el.file),
      });
      toast("✅ Робот успешно создан!");
      navigate(AppRoutes.shop);
    } catch (e) {
      toast("❌ Не удалось создать робота!");
    }
  });

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
        innerRef={formRef}
        initialValues={robotCreatingInitialValue}
        validationSchema={robotCreatingValidationSchema}
      >
        <Flex direction="column">
          <RobotFormControls />
          <ItemTitle $top="xlarge">Карточка робота</ItemTitle>
          <FakeRobotCard />
        </Flex>
      </AppFormik>
    </FormContainer>
  );
};

export default CreateRobotPage;
