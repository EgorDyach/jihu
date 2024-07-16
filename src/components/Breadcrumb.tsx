import { FC, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Paragraph } from "./Typography";
import Flex from "./Flex";

export type BreadcrumbItem = {
  path?: string;
  title: string;
};

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const StyledBreadcrumbLink = styled(Link)`
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;

const StyledParagraph = styled(Paragraph)`
  color: #aaa;
`;

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const navigate = useNavigate();
  const mappedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick: (e: any) => {
          if (item.path) {
            e.preventDefault();
            navigate(item.path);
          }
        },
      })),
    [items, navigate],
  );
  return (
    <>
      <Flex gap="12px">
        {mappedItems.map((el, index) => (
          <div key={index}>
            {el.path && (
              <Flex gap="12px">
                <StyledBreadcrumbLink to={el.path || ""}>
                  {el.title}
                </StyledBreadcrumbLink>
                <Paragraph>/</Paragraph>
              </Flex>
            )}
            {!el.path && <StyledParagraph>{el.title}</StyledParagraph>}
          </div>
        ))}
      </Flex>
    </>
  );
};

export default Breadcrumb;
