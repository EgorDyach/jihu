import IconButton from "@components/Button/IconButton";
import Flex from "@components/Flex";
import CartIcon from "@components/icons/CartIcon";
import { AppRoutes } from "@lib/configs/routes";
import { indent } from "@lib/theme/sizes";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { content } from "@lib/theme/colors";
import { headerLinks } from "./constants";

const HeaderLink = styled(Link)<{ isActive?: boolean }>`
  color: ${content.white};
  text-decoration: none;
  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 6px);
    height: 1px;
    background-color: ${content.primary};
    left: -3px;
    bottom: 3px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  position: relative;
  ${(props) =>
    props.isActive &&
    `
    &::after {
       opacity: 1;
       }
  `};
`;

const HeaderLogo = styled(Link)`
  font-family: "Verdana";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${content.white};
  text-decoration: none;
`;

const HeaderNavWrapper = styled(Flex)`
  max-width: 1280px;
  width: 100%;
  padding: 0 15px;
`;

const StyledHeaderNav = styled(Flex)`
  background-color: #111;
  padding: ${indent.medium};
  position: sticky;
  top: 0px;
  z-index: 10;
  width: 100%;
`;

export const HeaderNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledHeaderNav justify="center">
      <HeaderNavWrapper justify="space-between">
        <HeaderLogo to={"/shop"}>JIHU.RU</HeaderLogo>
        <Flex gap={indent.large}>
          {headerLinks.map((link) => (
            <HeaderLink isActive={pathname.includes(link.path)} to={link.path}>
              {link.title}
            </HeaderLink>
          ))}
        </Flex>
        <IconButton
          icon={<CartIcon color="#fff" size={24} />}
          onClick={() => navigate(AppRoutes.cart)}
        />
      </HeaderNavWrapper>
    </StyledHeaderNav>
  );
};
