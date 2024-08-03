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
import Button from "@components/Button/Button";
import { isAdmin } from "@lib/utils/isAdmin";
import IconButton from "@components/Button/IconButton";
import ThreeDotsIcon from "@components/icons/ThreeDotsIcon";
import Dropdown from "@components/Dropdown";
import PenIcon from "@components/icons/PenIcon";
import TrashIcon from "@components/icons/TrashIcon";
import { requestRemoveRobot } from "@lib/api/admin";
import { media } from "@lib/theme/media";

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

export const DropdownItem = styled(Flex)<{ $type: "edit" | "delete" }>`
  color: ${(props) =>
    props.$type === "edit" ? content.primary : content.danger};
`;

export const ShopCard: FC<ShopCardProps> = ({ robot }) => {
  const cart = useSelector(uiSelectors.getCart);
  const allRobots = useSelector(uiSelectors.getRobots);
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

  const LowerPartCard = styled(Flex)`
    ${media.xlarge`
      flex-direction: column;
      gap: 16px;
  `}
  `;

  const removeRobot = async (id: string | number) => {
    try {
      await requestRemoveRobot(id);
      toast("✅ Робот успешно удален!");
      dispatch(uiActions.setRobots(allRobots.filter((el) => el.id !== id)));
      dispatch(
        uiActions.setFilteredNoFilters(allRobots.filter((el) => el.id !== id)),
      );
    } catch (error) {
      toast("❌ Не удалось удалить!");
    }
  };

  const onClick = (key: string) => {
    if (key === "edit") navigate(AppRoutes.editRobot(robot.id));
    if (key === "delete") removeRobot(robot.id);
  };

  return (
    <ShopCardStyled direction="column">
      <ItemTitle>{robot.name}</ItemTitle>
      <Paragraph $top="small">{robot.short_description}</Paragraph>
      <LowerPartCard justify="space-between" $top="xlarge">
        <ItemTitle>{formatPrice(robot.price)}</ItemTitle>
        <Flex gap="16px">
          <Button
            type="default"
            onClick={() => navigate(AppRoutes.robotWithId(robot.id))}
          >
            Подробнее
          </Button>
          {isAdmin() ? (
            <Dropdown
              position="bottomRight"
              options={[
                {
                  label: (
                    <DropdownItem $type="edit" gap="8px">
                      <PenIcon size={14} />
                      <Paragraph>Редактировать</Paragraph>
                    </DropdownItem>
                  ),
                  key: "edit",
                },
                {
                  label: (
                    <DropdownItem $type="delete" gap="8px">
                      <TrashIcon size={14} />
                      <Paragraph>Удалить</Paragraph>
                    </DropdownItem>
                  ),
                  key: "delete",
                },
              ]}
              onClick={onClick}
            >
              <IconButton icon={<ThreeDotsIcon size={20} />} />
            </Dropdown>
          ) : (
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
      </LowerPartCard>
    </ShopCardStyled>
  );
};
