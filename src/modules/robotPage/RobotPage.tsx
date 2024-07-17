import Breadcrumb from "@components/Breadcrumb";
import Button from "@components/Button/Button";
import Carousel from "@components/Carousel";
import ContentLoader from "@components/ContentLoader";
import Flex from "@components/Flex";
import PlusIcon from "@components/icons/PlusIcon";
import { Header, Paragraph, SubHeader } from "@components/Typography";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { requestFullRobot } from "@lib/api/robot";
import { media } from "@lib/theme/media";
import PageNotFound from "@modules/pageNotFound/PageNotFound";
import { formatPrice } from "@modules/shopPage/helpers";
import { uiSelectors, uiActions } from "@store/ui";
import { FullRobot } from "@type/robots";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

export const robotPath = "/shop/:robotId";

const HeaderButton = styled(Button)`
  ${media.medium`
    display: none;
  `}
`;

export const RobotPage = () => {
  const { robotId = "" } = useParams();
  const [robot, setRobot] = useState<FullRobot | null>(null);
  const [isRobotLoading, setIsRobotLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setIsRobotLoading(true);
      try {
        const response = await requestFullRobot(robotId);
        setRobot(response);
      } catch (error) {
        toast("❌ Не удалось получить информацию о роботе!");
      } finally {
        setIsRobotLoading(false);
      }
    })();
  }, [robotId]);

  const cart = useSelector(uiSelectors.getCart);
  const dispatch = useAppDispatch();
  const isInCart = !!cart.filter((el) => el.id === robot?.id).length;
  const addToCart = () => {
    if (robot)
      if (isInCart) {
        dispatch(uiActions.removeFromCart(robot));
        toast("🗑️ Робот успешно удален из корзины!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      } else {
        dispatch(uiActions.addToCart(robot));
        toast("✅ Робот успешно добавлен в корзину!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
  };

  if (isRobotLoading) return <ContentLoader />;
  if (!robot) return <PageNotFound />;
  return (
    <>
      <Breadcrumb
        items={[
          {
            path: "/shop",
            title: "Роботы",
          },
          {
            title: robot.name,
          },
        ]}
      />
      <Flex $top="large" justify="space-between">
        <Header>{robot.name}</Header>
        <HeaderButton
          type={isInCart ? "danger" : "primary"}
          icon={<PlusIcon size={20} />}
          onClick={addToCart}
        >
          <Paragraph>{isInCart ? "Убрать из корзины" : "В корзину"}</Paragraph>
        </HeaderButton>
      </Flex>
      <Flex justify="center">
        <Carousel images={robot.photos} />
      </Flex>
      <SubHeader $top="medium">О роботе</SubHeader>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: robot.full_description }}
      ></div>
      <Flex align="start" direction="column">
        <SubHeader $top="medium">{formatPrice(robot.price)}</SubHeader>
        <Button
          $top="small"
          padding="8px 48px !important"
          borderRadius={10}
          type={isInCart ? "danger" : "primary"}
          icon={<PlusIcon size={24} />}
          onClick={addToCart}
        >
          <Paragraph>{isInCart ? "Убрать из корзины" : "В корзину"}</Paragraph>
        </Button>
      </Flex>
    </>
  );
};
