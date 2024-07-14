import Flex from "@components/Flex";
import { Text } from "@components/Typography";
import { FC } from "react";

interface FilterOptionProps {
  filterContent: string;
  count: number;
  initialFilters: {
    isChanged: boolean;
    tool: string[];
    platform: string[];
    minPrice: number | null;
    maxPrice: number | null;
  };
  setInitialFilters: React.Dispatch<
    React.SetStateAction<{
      isChanged: boolean;
      tool: string[];
      platform: string[];
      minPrice: number | null;
      maxPrice: number | null;
    }>
  >;
}

export const FilterOption: FC<FilterOptionProps> = ({
  filterContent,
  setInitialFilters,
  initialFilters,
  count,
}) => {
  return (
    <label>
      <Flex justify="space-between">
        <Flex>
          <input
            type="checkbox"
            onChange={() =>
              setInitialFilters({ ...initialFilters, isChanged: true })
            }
          />
          <Text>{filterContent}</Text>
        </Flex>
        <Text>{count}</Text>
      </Flex>
    </label>
  );
};
