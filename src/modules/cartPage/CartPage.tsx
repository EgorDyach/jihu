import Button from "@components/Button/Button";
import Flex from "@components/Flex";
import Image from "@components/Image";
import { ItemTitle, Paragraph, SubHeader } from "@components/Typography";
import { AppRoutes } from "@lib/configs/routes";
import { uiActions, uiSelectors } from "@store/ui";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "/img/notFound.png";
import styled from "styled-components";
import PlusIcon from "@components/icons/PlusIcon";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { toast } from "react-toastify";
import { formatPrice } from "@modules/shopPage/helpers";
import { Robot } from "@type/robots";
import { getFullPrice } from "./helpers";
import { useState } from "react";
import payment from "/img/optionsOfPay.png";
import { Checkbox } from "@components/Checkbox";
import { media } from "@lib/theme/media";
export const cartPath = "/cart";

const TableHeaderTitle = styled(Paragraph)`
  color: #888;
  max-width: 280px;
  width: 100%;

  &:nth-child(2n + 1) {
    max-width: 150px;
  }

  &:nth-child(4) {
    width: 200px;
    ${media.xlarge`
      width: 100%;
      `}
  }

  text-align: center;
`;

const TableRow = styled(Flex)`
  padding: 24px;

  border-bottom: 1px solid #333;

  td {
    max-width: 280px;
    width: 100%;
    text-align: center;
  }

  td:nth-child(2) {
    padding: 0 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3; // количество строк
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${media.large`
      max-width: 350px;
    `}
  }

  td:nth-child(2n + 1) {
    max-width: 150px;
  }

  td:nth-child(4) {
    width: 200px;

    ${media.xlarge`
      width: 100%;
      `}
  }
`;

const ButtonWrapper = styled(Flex)`
  ${media.large`
    flex-direction: column;
    gap: 8px;
  `}
`;

export const CartPage = () => {
  const robots = useSelector(uiSelectors.getCart);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const removeFromCart = (robot: Robot) => {
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
  };
  return (
    <Flex direction="column">
      <SubHeader>Корзина</SubHeader>
      {!!robots.length && (
        <Flex direction="column">
          <Flex direction="column">
            <TableRow justify="center" gap="48px">
              <TableHeaderTitle>Название</TableHeaderTitle>
              <TableHeaderTitle>Описание</TableHeaderTitle>
              <TableHeaderTitle>Цена</TableHeaderTitle>
              <TableHeaderTitle>Действия</TableHeaderTitle>
            </TableRow>
            {robots.map((robot) => (
              <TableRow justify="center" gap="48px">
                <td>{robot.name}</td>
                <td>
                  <p>{robot.short_description}</p>
                </td>
                <td>
                  <ItemTitle>{formatPrice(robot.price)}</ItemTitle>
                </td>
                <td>
                  <ButtonWrapper gap="16px">
                    <Button
                      type="default"
                      onClick={() => navigate(AppRoutes.robotWithId(robot.id))}
                    >
                      Подробнее
                    </Button>
                    <Button
                      type="danger"
                      icon={<PlusIcon size={20} />}
                      onClick={() => removeFromCart(robot)}
                    >
                      <Paragraph>Удалить</Paragraph>
                    </Button>
                  </ButtonWrapper>
                </td>
              </TableRow>
            ))}
          </Flex>
          <ItemTitle $top="medium">
            К оплате: {formatPrice(getFullPrice(robots))}
          </ItemTitle>
          <Flex gap="24px" $top="medium">
            <Button
              disabled={!isChecked}
              type="primary"
              onClick={() => toast("🥱 Оплата еще не реализована")}
              padding="16px 48px"
            >
              Оплатить
            </Button>
            <Image src={payment} $maxWidth="170px" />
          </Flex>
          <Flex>
            <Checkbox
              checked={isChecked}
              label={
                <Paragraph>
                  Даю согласие на{" "}
                  <a href="/agreements.pdf">условия использования «JIHU.RU»</a>
                </Paragraph>
              }
              onChange={() => setIsChecked(!isChecked)}
              $top="medium"
            />
          </Flex>
        </Flex>
      )}
      {!robots.length && (
        <Flex align="center" direction="column">
          <Flex direction="column">
            <Image $maxWidth="250px" src={img} />
            <Paragraph $top="medium">Ваша корзина пустая!</Paragraph>
            <Button
              padding="16px 32px"
              $top="medium"
              onClick={() => navigate(AppRoutes.shop)}
            >
              Купить роботов
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
