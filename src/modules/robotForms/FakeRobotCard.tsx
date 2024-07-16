import Button from "@components/Button/Button";
import Flex from "@components/Flex";
import PlusIcon from "@components/icons/PlusIcon";
import { ItemTitle, Paragraph } from "@components/Typography";
import { background } from "@lib/theme/colors";
import { radius, indent } from "@lib/theme/sizes";
import { formatPrice } from "@modules/shopPage/helpers";
import { FC, useState } from "react";
import styled from "styled-components";
import { RobotForm } from "./types";
import { useFormikContext } from "formik";

const FakeCardStyled = styled(Flex)`
  position: relative;
  width: 100%;
  background-color: ${background.secondary};
  border-radius: ${radius.xLarge};
  padding: ${indent.large} ${indent.xlarge};
`;

export const FakeRobotCard: FC = () => {
  const [isInCart, setIsInCart] = useState(false);
  const { values } = useFormikContext<RobotForm>();

  return (
    <FakeCardStyled $top="medium" direction="column">
      <ItemTitle>{values.name || "Название робота"}</ItemTitle>
      <Paragraph $top="small">
        {values.short_description || "Краткое описание робота"}
      </Paragraph>
      <Flex justify="space-between" $top="xlarge">
        <ItemTitle>{formatPrice(values.price)}</ItemTitle>
        <Flex gap="16px">
          <Button type="default">Подробнее</Button>
          <Button
            type={isInCart ? "danger" : "primary"}
            icon={<PlusIcon size={20} />}
            onClick={() => setIsInCart(!isInCart)}
          >
            <Paragraph>
              {isInCart ? "Убрать из корзины" : "В корзину"}
            </Paragraph>
          </Button>
        </Flex>
      </Flex>
    </FakeCardStyled>
  );
};
