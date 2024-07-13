import Flex from "@components/Flex";

import { indent } from "@lib/theme/sizes";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { headerContacts } from "./constants";
import { content } from "@lib/theme/colors";

const HeaderLink = styled(Link)`
  color: ${content.white};
  text-decoration: none;
  cursor: pointer;
`;

const HeaderContactsWrapper = styled(Flex)`
  max-width: 1280px;
  width: 100%;
  padding: 0 15px;
`;

const StyledHeaderContacts = styled(Flex)`
  background-color: ${content.primary};
  padding: ${indent.medium};
  position: sticky;
  top: 0px;
  color: white;
  padding: 10px 0;
  text-align: center;
  z-index: 10;
  width: 100%;
`;

export const HeaderContacts = () => {
  return (
    <StyledHeaderContacts justify="center">
      <HeaderContactsWrapper justify="space-between">
        <Flex gap={indent.vlarge}>
          <HeaderLink to={headerContacts[0].link}>
            {headerContacts[0].label}
          </HeaderLink>
          <HeaderLink to={headerContacts[1].link}>
            {headerContacts[1].label}
          </HeaderLink>
        </Flex>
        <Flex gap={indent.large}>
          {headerContacts.slice(2).map((link) => (
            <HeaderLink to={link.link}>{link.label}</HeaderLink>
          ))}
        </Flex>
      </HeaderContactsWrapper>
    </StyledHeaderContacts>
  );
};
