import { Header, ItemTitle, Text } from "@components/Typography";
import { screenerCards } from "./constants";
import { useEffect, useState, ReactNode } from "react";
import { PaginationQueryParams } from "@type/common";
import Flex from "@components/Flex";
import { content } from "@lib/theme/colors";
import { media } from "@lib/theme/media";
import { indent } from "@lib/theme/sizes";
import styled from "styled-components";
import { ScreenerCard } from "./ScreenerCard";
import Input from "@components/Input/Input";
import Image from "@components/Image";
import CrossIcon from "@components/icons/CrossIcon";

export const screenerPath = "/screeners";

const StyledInput = styled(Input)`
  width: 100%;
  max-width: 250px;
  ${media.medium`
      display: none;
    `}
`;

const IndexesWrapper = styled(Flex)`
  max-height: 400px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  overflow-y: scroll;

  ${media.medium`
    width: 100%;
    max-height: 100%;
  `}
`;

const ButtonNav = styled.button<{ $type: "left" | "right" }>`
  background-color: ${content.primary};
  padding: ${indent.large};
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:active {
    background-color: #ba7000;
    transform: scale(0.9);
  }

  &:disabled {
    cursor: default;
    background-color: ${content.secondary};
  }

  &::after {
    content: "";
    position: absolute;
    border-left: 2px solid #fff;
    border-top: 2px solid #fff;
    width: 8px;
    height: 8px;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    transform: rotate(
      ${(props) => (props.$type === "left" ? "-45deg" : "135deg")}
    );
  }

  ${media.medium`
    padding: ${indent.medium};

    &::after {
    width: 6px;
    height: 6px;
    top: calc(50% - 3px);
    left: calc(50% - 4px);
    
  }
  `}
`;

const ScreenerModal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999999999999;
  transition: 0.3s ease;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
`;

const ModalContent = styled(Flex)`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  position: relative;
`;

const HideModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  padding: none;
  background-color: transparent;
`;

const CardWrapper = styled(Flex)`
  ${media.medium`
      display: none;
    `}
`;

const ScreenersControls = styled(Flex)`
  ${media.medium`
      width: 100%;
    `}
`;

type Screener = {
  index: string;
  title: string;
  element: ReactNode;
};

export const ScreenerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalScreener, setModalScreener] = useState<Screener | null>(null);
  const [loadedScreeners, setLoadedScreeners] = useState<Screener[]>([]);
  const [filteredScreeners, setFilteredScreeners] = useState<Screener[]>([]);
  const [filteredLoadedScreeners, setFilteredLoadedScreeners] = useState<
    {
      index: string;
      title: string;
      element: ReactNode;
    }[]
  >([]);
  const [pagination, setPagination] = useState<PaginationQueryParams>({
    offset: 0,
    limit: 4,
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useState<string>(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setFilteredScreeners(
        screenerCards.filter(
          (card) =>
            card.title
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase()) ||
            card.index
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase()),
        ),
      );
      setPagination({
        limit: pagination.limit,
        offset: 0,
      });
    }
  }, [debouncedSearchTerm, pagination.limit]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      return setFilteredLoadedScreeners([
        ...filteredScreeners.slice(
          pagination.offset,
          pagination.offset + pagination.limit,
        ),
      ]);
    }
    return setLoadedScreeners([
      ...screenerCards.slice(
        pagination.offset,
        pagination.offset + pagination.limit,
      ),
    ]);
  }, [
    debouncedSearchTerm,
    filteredScreeners,
    pagination.limit,
    pagination.offset,
  ]);

  const openModal = (screener: Screener) => {
    setIsModalOpen(true);
    setModalScreener(screener);
  };

  const nextScreeners = () => {
    setPagination({
      ...pagination,
      offset: pagination.offset + pagination.limit,
    });
  };

  const prevScreeners = () => {
    setPagination({
      ...pagination,
      offset: pagination.offset - pagination.limit,
    });
  };

  return (
    <>
      <ScreenerModal $isOpen={isModalOpen}>
        <ModalContent>
          {modalScreener ? (
            modalScreener.element
          ) : (
            <Text>Не удалось открыть скринер!</Text>
          )}
          <HideModal onClick={() => setIsModalOpen(false)}>
            <CrossIcon size={32} />
          </HideModal>
        </ModalContent>
      </ScreenerModal>
      <Header>Скринеры акций</Header>
      <Flex justify="space-between">
        <ScreenersControls direction="column" $top="medium">
          <StyledInput
            value={searchTerm}
            placeholder="Введите индекс или название компании"
            onChange={(v) => setSearchTerm(v)}
          />
          <IndexesWrapper $top="medium" gap="20px" direction="column">
            {screenerCards.map((card) => {
              return (
                <Flex gap="8px" align="center" onClick={() => openModal(card)}>
                  <Image
                    $size="20px"
                    src={`https://beststocks.ru/api/file/stock/logos/RU:${card.index.toUpperCase()}.png`}
                  />
                  <ItemTitle>{card.index.toUpperCase()}</ItemTitle>
                  <Text $size="default" $color="secondary">
                    {card.title.split(" ").slice(2).join(" ")}
                  </Text>
                </Flex>
              );
            })}
          </IndexesWrapper>
        </ScreenersControls>
        <CardWrapper
          align="center"
          direction="column"
          style={{ maxWidth: "60%", alignSelf: "end" }}
        >
          <Flex
            $top="medium"
            basis="20%"
            wrap="wrap"
            gap="24px"
            justify="center"
          >
            {!debouncedSearchTerm &&
              loadedScreeners.map((el) => {
                return (
                  <ScreenerCard element={el.element} />
                ) as unknown as ReactNode;
              })}
            {debouncedSearchTerm &&
              filteredLoadedScreeners.map((el) => {
                return (
                  <ScreenerCard element={el.element} />
                ) as unknown as ReactNode;
              })}
          </Flex>
          <Flex $top="medium" justify="center" gap="16px">
            <ButtonNav
              disabled={pagination.offset === 0}
              onClick={prevScreeners}
              $type="left"
            />
            <ButtonNav
              disabled={
                pagination.offset + pagination.limit >=
                (debouncedSearchTerm
                  ? filteredScreeners.length
                  : screenerCards.length)
              }
              onClick={nextScreeners}
              $type="right"
            />
          </Flex>
        </CardWrapper>
      </Flex>
    </>
  );
};
