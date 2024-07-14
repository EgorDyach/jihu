import Flex from "@components/Flex";
import Range from "@components/Range";
import { content } from "@lib/theme/colors";
import { indent } from "@lib/theme/sizes";
import { FC, useState } from "react";
import styled from "styled-components";
import { getMaxPrice } from "./helpers";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { uiActions, uiSelectors } from "@store/ui";
import { useSelector } from "react-redux";

const RangeWrapper = styled(Flex)`
  max-width: 400px;
  width: 100%;
`;

const ApplyButton = styled.button<{ $isActive: boolean }>`
  background-color: ${(props) => (props.$isActive ? content.primary : "#ddd")};
  border-radius: 16px;
  border: none;
  color: ${content.white};
  padding: ${indent.medium} ${indent.xlarge};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
  transition: background-color 0.3s ease;
  font-size: ${indent.medium};
  font-family: "Montserrat";
  line-height: ${indent.medium};
`;

const ShopControlsStyled = styled(Flex)`
  background: #fff;
  border-radius: 10px;
  padding: 4px 16px;
`;

export const ShopControls: FC = () => {
  const robots = useSelector(uiSelectors.getRobots);
  const max = getMaxPrice(robots);
  const dispatch = useAppDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(max);
  const [isPriceTouched, setIsPriceTouched] = useState(false);

  const handleRangeChange = (values: number[]) => {
    setIsPriceTouched(true);
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const applyFilter = () => {
    setIsPriceTouched(false);
    dispatch(
      uiActions.setFilteredRobots({
        minPrice: minPrice,
        maxPrice: maxPrice,
      }),
    );
  };

  return (
    <ShopControlsStyled gap="24px" $top="large" align="center">
      <RangeWrapper gap="16px" align="center">
        <Range min={0} max={max} step={1000} onChange={handleRangeChange} />
      </RangeWrapper>
      <ApplyButton onClick={applyFilter} $isActive={isPriceTouched}>
        Применить
      </ApplyButton>
    </ShopControlsStyled>
  );
};
