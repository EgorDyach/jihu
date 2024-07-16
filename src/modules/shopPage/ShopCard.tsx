import Flex from "@components/Flex";
import { ItemTitle, Paragraph } from "@components/Typography";
import { background } from "@lib/theme/colors";
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
import Button from "@components/Button/Button";
import { isAdmin } from "@lib/utils/isAdmin";

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
          <Button
            type="default"
            onClick={() => navigate(AppRoutes.robotWithId(robot.id))}
          >
            Подробнее
          </Button>
          {!isAdmin() && (
            <Button
              type={isInCart ? "danger" : "primary"}
              icon={<PlusIcon size={20} />}
              onClick={addToCart}
            >
              <Paragraph>
                {isInCart ? "Убрать из корзины" : "В корзину"}
              </Paragraph>
            </Button>
          )}
        </Flex>
      </Flex>
    </ShopCardStyled>
  );
};
