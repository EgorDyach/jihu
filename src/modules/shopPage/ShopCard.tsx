import Flex from "@components/Flex";
import { ItemTitle, Paragraph } from "@components/Typography";
import { background, content } from "@lib/theme/colors";
import { radius, indent } from "@lib/theme/sizes";
import { Robot } from "@type/robots";
import { FC } from "react";
import styled from "styled-components";
import { formatPrice } from "./helpers";
import PlusIcon from "@components/icons/PlusIcon";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@lib/configs/routes";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { uiActions, uiSelectors } from "@store/ui";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

interface ShopCardProps {
  robot: Robot;
}

const ShopCardStyled = styled(Flex)`
  position: relative;
  width: 100%;
  background-color: ${background.secondary};
  border-radius: ${radius.xLarge};
  padding: ${indent.large} ${indent.xlarge};
`;

const ButtonMore = styled.button`
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #cfd6dd;
  color: #333;
  padding: ${indent.small} ${indent.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: ${indent.medium};
  font-family: "Montserrat";
  line-height: ${indent.medium};
`;

const ButtonAdd = styled.button<{ $isInCart: boolean }>`
  background-color: ${(props) =>
    props.$isInCart ? "#D90D00" : content.primary};
  display: flex;
  border-radius: 5px;
  border: none;
  align-items: center;
  gap: 8px;
  color: #fff;
  padding: ${indent.small} ${indent.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: ${indent.medium};
  font-family: "Montserrat";
  line-height: ${indent.medium};
  ${(props) =>
    props.$isInCart &&
    `
    & svg {
      transform: rotate(135deg);
    }
  `}
`;

export const ShopCard: FC<ShopCardProps> = ({ robot }) => {
  const cart = useSelector(uiSelectors.getCart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isInCart = !!cart.filter((el) => el.id === robot.id).length;
  const addToCart = () => {
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
  return (
    <ShopCardStyled direction="column">
      <ItemTitle>{robot.name}</ItemTitle>
      <Paragraph $top="small">{robot.short_description}</Paragraph>
      <Flex justify="space-between" $top="xlarge">
        <ItemTitle>{formatPrice(robot.price)}</ItemTitle>
        <Flex gap="16px">
          <ButtonMore onClick={() => navigate(AppRoutes.robotWithId(robot.id))}>
            Подробнее
          </ButtonMore>
          <ButtonAdd $isInCart={isInCart} onClick={addToCart}>
            <PlusIcon size={20} />
            <Paragraph>
              {isInCart ? "Убрать из корзины" : "В корзину"}
            </Paragraph>
          </ButtonAdd>
        </Flex>
      </Flex>
    </ShopCardStyled>
  );
};
