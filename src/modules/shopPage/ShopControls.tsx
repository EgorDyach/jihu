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
import ArrowUpIcon from "@components/icons/ArrowUpIcon";
import ArrowDownIcon from "@components/icons/ArrowDownIcon";

const RangeWrapper = styled(Flex)`
  max-width: 470px;
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
  padding: 16px 24px;
`;

const FilterTitle = styled.h3`
  font-size: 14px;
  color: #888;
`;

const SortItem = styled.h3<{ $isActiveSort: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: ${(props) => (props.$isActiveSort ? 16 : 13)}px;
  color: ${(props) => (props.$isActiveSort ? "#111" : "#888")};
  cursor: pointer;
  transition: 0.3s ease;
  & svg {
    transition: 0.3s ease;
  }
`;

export const ShopControls: FC = () => {
  const robots = useSelector(uiSelectors.getRobots);
  const max = getMaxPrice(robots);
  const dispatch = useAppDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(max);
  const [isPriceTouched, setIsPriceTouched] = useState(false);
  const [activeSort, setActiveSort] = useState<
    "POPULAR" | "UP_PRICE" | "DOWN_PRICE"
  >("POPULAR");

  const handleRangeChange = (values: number[]) => {
    setIsPriceTouched(true);
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const handleSortChange = (sort: "POPULAR" | "UP_PRICE" | "DOWN_PRICE") => {
    setIsPriceTouched(true);
    setActiveSort(sort);
  };

  const applyFilter = () => {
    setIsPriceTouched(false);
    dispatch(
      uiActions.setFilteredRobots({
        minPrice: minPrice,
        maxPrice: maxPrice,
        activeSort,
      }),
    );
  };

  return (
    <ShopControlsStyled justify="space-between" $top="large" gap="24px">
      <RangeWrapper direction="column">
        <FilterTitle>Сортировка</FilterTitle>
        <Flex gap="16px">
          <SortItem
            onClick={() => handleSortChange("POPULAR")}
            $isActiveSort={activeSort === "POPULAR"}
          >
            По популярности
          </SortItem>
          <SortItem
            onClick={() => handleSortChange("UP_PRICE")}
            $isActiveSort={activeSort === "UP_PRICE"}
          >
            <ArrowUpIcon size={14} /> По увелич. цены
          </SortItem>
          <SortItem
            onClick={() => handleSortChange("DOWN_PRICE")}
            $isActiveSort={activeSort === "DOWN_PRICE"}
          >
            <ArrowDownIcon size={14} />
            По уменьш. цены
          </SortItem>
        </Flex>
      </RangeWrapper>
      <RangeWrapper direction="column" align="start">
        <FilterTitle>Цена</FilterTitle>
        <Range min={0} max={max} step={1000} onChange={handleRangeChange} />
      </RangeWrapper>
      <Flex align="end">
        <ApplyButton onClick={applyFilter} $isActive={isPriceTouched}>
          Применить
        </ApplyButton>
      </Flex>
    </ShopControlsStyled>
  );
};
