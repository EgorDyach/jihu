// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useFormRef } from "@hooks/useFormRef";
// import { useNavigate, useParams } from "react-router-dom";
// import { FC, useEffect, useState } from "react";
// import { useCallbackOnce } from "@hooks/useCallbackOnce";
// import { toast } from "react-toastify";
// import { AppRoutes } from "@lib/configs/routes";
// import { requestEditRobot } from "@lib/api/admin";
// import { RobotForm, RobotFormEdit } from "./types";
// import AppFormik from "@components/form/AppFormik";
// import { RobotFormControls } from "./RobotFormControls";
// import { robotCreatingValidationSchema } from "./constants";
// import { Header, ItemTitle } from "@components/Typography";
// import Breadcrumb from "@components/Breadcrumb";
// import Flex from "@components/Flex";
// import { FakeRobotCard } from "./FakeRobotCard";
// import styled from "styled-components";
// import { requestFullRobot } from "@lib/api/robot";
// import PageNotFound from "@modules/pageNotFound/PageNotFound";
// import ContentLoader from "@components/ContentLoader";

// const FormContainer = styled(Flex)`
//   max-width: 750px;
// `;

// export const EditRobotPath = "/shop/:robotId/edit";

// const EditRobotPage: FC = () => {
//   const { robotId = "" } = useParams();
//   const [robot, setRobot] = useState<RobotForm | null>(null);
//   const [isRobotLoading, setIsRobotLoading] = useState(true);
//   useEffect(() => {
//     (async () => {
//       setIsRobotLoading(true);
//       try {
//         const response = await requestFullRobot(robotId);
//         setRobot({
//           ...response,
//           photos: response.photos.map((el) => ({
//             id: Math.floor(Math.random() * 1000000),
//             type: "url",
//             file: el,
//           })),
//         });
//       } catch (error) {
//         toast("❌ Не удалось получить информацию о роботе!");
//       } finally {
//         setIsRobotLoading(false);
//       }
//     })();
//   }, [robotId]);
//   const navigate = useNavigate();
//   const formRef = useFormRef<RobotFormEdit>();
//   const handleSubmit = useCallbackOnce(async (values: RobotForm) => {
//     if (!values) return;
//     try {
//       await requestEditRobot(
//         {
//           ...values,
//           photos: values.photos.map((el) => el.file),
//         },
//         robotId,
//       );
//       toast("✅ Робот успешно изменен!");
//       navigate(AppRoutes.shop);
//     } catch (e) {
//       toast("❌ Не удалось изменить робота!");
//     }
//   });

//   if (isRobotLoading) return <ContentLoader />;

//   if (!robot) {
//     navigate(AppRoutes.adminCreate);
//     return <PageNotFound />;
//   }

//   return (
//     <FormContainer direction="column">
//       <Breadcrumb
//         items={[
//           {
//             title: "Роботы",
//             path: AppRoutes.shop,
//           },
//           {
//             title: "Создание робота",
//           },
//         ]}
//       />
//       <Header $top="medium">Создание робота</Header>
//       <AppFormik
//         validateOnMount={true}
//         onSubmit={handleSubmit}
//         innerRef={formRef as any}
//         initialValues={robot}
//         validationSchema={robotCreatingValidationSchema}
//       >
//         <Flex direction="column">
//           <RobotFormControls />
//           <ItemTitle $top="xlarge">Карточка робота</ItemTitle>
//           <FakeRobotCard />
//         </Flex>
//       </AppFormik>
//     </FormContainer>
//   );
// };

// export default EditRobotPage;
