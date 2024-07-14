import Flex from "@components/Flex";
import { Header } from "@layouts/shared/header/Header";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ShopContent = styled(Flex)`
  padding: 32px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

const ShopWrapper = styled(Flex)`
  background-color: #eeeeee;
`;

export const ShopLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ShopWrapper direction="column">
      <Header />
      <ShopContent direction="column">{children || <Outlet />}</ShopContent>
    </ShopWrapper>
  );
};
