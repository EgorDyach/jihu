import ContentLoader from "@components/ContentLoader";
import Flex from "@components/Flex";
import { Header } from "@components/Typography";
import { useEffect } from "react";
import { ShopCard } from "./ShopCard";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { fetchRobots } from "@store/ui/thunks";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";
import { ShopControls } from "./ShopControls";

export const ShopPage = () => {
  const robots = useSelector(uiSelectors.getFiltered);
  const dispatch = useAppDispatch();
  const status = useSelector(uiSelectors.getRequests);

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  if (status["getRobots"] === "pending") return <ContentLoader />;

  return (
    <>
      <Header>Роботы</Header>
      <Flex direction="column">
        <ShopControls />
        <Flex $top="large" basis="50%" wrap="wrap" gap="16px">
          {robots.map((robot) => (
            <ShopCard robot={robot} />
          ))}
        </Flex>
      </Flex>
    </>
  );
};
