import Flex from "@components/Flex";
import { Header } from "@layouts/shared/header/Header";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export const AboutLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex direction="column">
      <Header />
      {children || <Outlet />}
    </Flex>
  );
};
