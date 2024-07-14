import Flex from "@components/Flex";
import { background } from "@lib/theme/colors";
import { radius, indent } from "@lib/theme/sizes";
import { Robot } from "@type/robots";
import { FC } from "react";
import styled from "styled-components";

interface ShopCardProps {
  robot: Robot;
}

export const ShopCardStyled = styled(Flex)`
  padding: 58px 24px 24px;
  position: relative;
  width: 100%;
  background-color: ${background.secondary};
  border-radius: ${radius.xLarge};
  padding: ${indent.large} ${indent.xlarge};
`;

export const ShopCard: FC<ShopCardProps> = ({ robot }) => {
  return <ShopCardStyled>{robot.name}</ShopCardStyled>;
};
