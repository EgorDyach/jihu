import ContentLoader from "@components/ContentLoader";
import Flex from "@components/Flex";
import { Header, Paragraph } from "@components/Typography";
import { useEffect } from "react";
import { ShopCard } from "./ShopCard";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { fetchRobots } from "@store/ui/thunks";
import { useSelector } from "react-redux";
import { uiActions, uiSelectors } from "@store/ui";
import { ShopControls } from "./ShopControls";
import img from "/img/notFound.png";
import { content } from "@lib/theme/colors";
import { indent } from "@lib/theme/sizes";
import styled from "styled-components";
import { getMaxPrice } from "./helpers";
import Image from "@components/Image";
import { isAdmin } from "@lib/utils/isAdmin";
import Button from "@components/Button/Button";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@lib/configs/routes";
import { media } from "@lib/theme/media";

const ClearFilters = styled.button`
  background-color: ${content.primary};
  border-radius: 10px;
  border: none;
  color: ${content.white};
  padding: ${indent.medium} ${indent.vlarge};
  cursor: pointer;
  margin-top: ${indent.xlarge};
  font-size: ${indent.medium};
  font-family: "Montserrat";
`;

const RobotsWrapper = styled(Flex)`
  ${media.medium`
    gap: 16px;
    flex-direction: column;
  `}
`;

export const ShopPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const robots = useSelector(uiSelectors.getFiltered);
  const status = useSelector(uiSelectors.getRequests);
  const allServerRobots = useSelector(uiSelectors.getRobots);
  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  if (status["getRobots"] === "pending") return <ContentLoader />;

  return (
    <>
      <Flex justify="space-between">
        <Header>Роботы</Header>
        {isAdmin() && (
          <Button onClick={() => navigate(AppRoutes.adminCreate)}>
            Добавить робота
          </Button>
        )}
      </Flex>
      <Flex direction="column">
        <ShopControls />
        {!!robots.length && (
          <RobotsWrapper $top="large" basis="50%" wrap="wrap" gap="16px">
            {robots.map((robot) => (
              <ShopCard key={robot.id} robot={robot} />
            ))}
          </RobotsWrapper>
        )}
        {!robots.length && (
          <Flex align="center" direction="column">
            <Flex direction="column">
              <Image $maxWidth="300px" src={img} />
              <Paragraph>По вашему запросу ничего не найдено!</Paragraph>
              <ClearFilters
                onClick={() =>
                  dispatch(
                    uiActions.setFilteredRobots({
                      minPrice: 0,
                      maxPrice: getMaxPrice(allServerRobots),
                      activeSort: "POPULAR",
                    }),
                  )
                }
              >
                Отчистить фильтры
              </ClearFilters>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};
