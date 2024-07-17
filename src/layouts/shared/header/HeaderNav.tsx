import IconButton from "@components/Button/IconButton";
import Flex from "@components/Flex";
import CartIcon from "@components/icons/CartIcon";
import { AppRoutes } from "@lib/configs/routes";
import { indent } from "@lib/theme/sizes";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { content } from "@lib/theme/colors";
import { headerContacts, headerLinks } from "./constants";
import { isAdmin } from "@lib/utils/isAdmin";
import LogoutIcon from "@components/icons/LogoutIcon";
import { useEffect, useState } from "react";
import { media } from "@lib/theme/media";

const HeaderLink = styled(Link)<{ $isActive?: boolean }>`
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
    opacity: ${(props) => (props.$isActive ? 1 : 0)};
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
  ${media.medium`
    padding: 0;
  `}
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
  ${media.medium`
    display: none;
  `}
`;

const HeaderMenu = styled(Flex)<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transform: translateY(${(props) => (props.$isOpen ? 0 : -150)}%);
  transition: transform 0.3s ease;
  z-index: 10000000;
  padding: 70px 20px;
  color: #fff;
`;

const HeaderBurger = styled.button<{ $isOpen: boolean }>`
  border: none;
  background-color: transparent;
  padding: 0;
  display: none;
  justify-content: space-between;
  flex-direction: column;
  width: 30px;
  height: 24px;
  span {
    height: 3px;
    background-color: #fff;
    width: 100%;
    transition: 0.3s ease;
    ${(props) =>
      props.$isOpen &&
      `
      &:nth-child(1) {
        transform: rotate(45deg) translateY(14px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translateY(-14px);
      }

    `}
  }
  ${media.medium`
    display: flex;
  `}
  z-index: 10000001;
`;

export const HeaderNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isBurgerOpen ? "hidden" : "";
  }, [isBurgerOpen]);

  return (
    <StyledHeaderNav justify="center">
      <HeaderNavWrapper align="center" justify="space-between">
        <HeaderBurger
          $isOpen={isBurgerOpen}
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </HeaderBurger>
        <HeaderMenu align="center" $isOpen={isBurgerOpen} direction="column">
          <Flex
            gap="24px"
            direction="column"
            onClick={() => setIsBurgerOpen(false)}
          >
            {headerLinks.map((link, index) => (
              <HeaderLink
                key={index}
                $isActive={
                  pathname.includes(link.path) ||
                  (link.path === "/shop" && pathname === "/")
                }
                to={link.path}
              >
                {link.title}
              </HeaderLink>
            ))}
          </Flex>
          <Flex gap="24px" $top="vlarge" direction="column">
            <HeaderLink to={headerContacts[0].link}>
              {headerContacts[0].label}
            </HeaderLink>
            <HeaderLink to={headerContacts[1].link}>
              {headerContacts[1].label}
            </HeaderLink>
            <Flex gap="32px">
              {headerContacts.slice(2).map((link, index) => (
                <HeaderLink key={index} to={link.link}>
                  {link.label}
                </HeaderLink>
              ))}
            </Flex>
          </Flex>
        </HeaderMenu>
        <HeaderLogo to={"/"}>JIHU.RU</HeaderLogo>
        <HeaderLinks gap={indent.large}>
          {headerLinks.map((link, index) => (
            <HeaderLink
              key={index}
              $isActive={
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
