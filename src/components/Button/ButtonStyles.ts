import styled from "styled-components";
import { boxShadow, button, content } from "@lib/theme/colors";
import { ReactNode } from "react";

export const StyledButton = styled.button<{ icon?: ReactNode }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // TODO add 12px ?!
  padding-left: ${(props) => props.icon && "12px"};

  &:not(:disabled) {
    &:focus-visible {
      outline-color: transparent;
      box-shadow: ${boxShadow.focused};
    }
  }

  &.ant-btn-primary {
    &:disabled {
      color: ${content.white};
      background-color: ${button.primaryBg};
      opacity: 0.5;
    }
  }

  &.ant-btn-default {
    &:not(:disabled) {
      &:hover {
        color: ${button.secondaryTextHover} !important;
        border-color: ${button.secondaryHover} !important;
      }

      &:active {
        color: ${button.secondaryTextActive} !important;
        border-color: ${button.secondaryActive} !important;
      }
    }
  }
`;
