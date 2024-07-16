import IconButton from "@components/Button/IconButton";
import Flex from "@components/Flex";
import CartIcon from "@components/icons/CartIcon";
import { AppRoutes } from "@lib/configs/routes";
import { indent } from "@lib/theme/sizes";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { content } from "@lib/theme/colors";
import { headerLinks } from "./constants";
import { isAdmin } from "@lib/utils/isAdmin";
import LogoutIcon from "@components/icons/LogoutIcon";

const HeaderLink = styled(Link)<{ isActive?: boolean }>`
  color: ${content.white};
  text-decoration: none;
  position: relative;
  transition: 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 6px);
    height: 1px;
    background-color: ${content.primary};
    left: -3px;
    bottom: 0px;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transition: 0.3s ease-in-out;
  }
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
  padding: 0 32px;
  position: relative;
`;

const StyledHeaderNav = styled(Flex)`
  background-color: #111;
  padding: ${indent.medium};
  position: sticky;
  top: 0px;
  z-index: 10;
  width: 100%;
`;

const HeaderLinks = styled(Flex)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledHeaderNav justify="center">
      <HeaderNavWrapper justify="space-between">
        <HeaderLogo to={"/"}>JIHU.RU</HeaderLogo>
        <HeaderLinks gap={indent.large}>
          {headerLinks.map((link) => (
            <HeaderLink
              isActive={
                pathname.includes(link.path) ||
                (link.path === "/shop" && pathname === "/")
              }
              to={link.path}
            >
              {link.title}
            </HeaderLink>
          ))}
        </HeaderLinks>
        <Flex gap="24px">
          <IconButton
            icon={<CartIcon color="#fff" size={24} />}
            onClick={() => navigate(AppRoutes.cart)}
          />
          {isAdmin() && (
            <IconButton
              icon={<LogoutIcon color="#fff" size={24} />}
              onClick={() => {
                localStorage.removeItem("accessJihu");
                navigate(AppRoutes.about);
              }}
            />
          )}
        </Flex>
      </HeaderNavWrapper>
    </StyledHeaderNav>
  );
};
