import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface DropdownOption {
  label: React.ReactNode;
  key: string;
}

interface DropdownProps extends PropsWithChildren {
  options: DropdownOption[];
  onClick: (key: string) => void;
  position?: DropdownPosition;
}

type DropdownPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "bottomCenter";

const MainButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownMenu = styled.div<{
  $isOpen: boolean;
  $dropdownPosition: DropdownPosition;
}>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: opacity 0.2s ease;
  position: absolute;
  ${({ $dropdownPosition }) =>
    $dropdownPosition.includes("top")
      ? `
    bottom: calc(100% + 4px);
    `
      : `
    top: calc(100% + 4px);
  `}
  ${({ $dropdownPosition }) =>
    $dropdownPosition.includes("Left")
      ? `
    left: 0;
    `
      : $dropdownPosition.includes("Right")
        ? `
    right: 0;
    `
        : `
    left: 50%;
    transform: translateX(-50%);
    `}
  background-color: "#FFF";
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  z-index: 100000;
`;

const DropdownButton = styled.button`
  padding: 16px 24px;
  background-color: #fff;
  color: #333;
  border: none;
  width: 100%;
  cursor: pointer;
  font-family: "Montserrat";
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    background-color: #e1e1e1;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onClick,
  children,
  position = "bottomLeft",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (key: string) => {
    onClick(key);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative", display: "flex" }}>
      <MainButton onClick={() => setIsOpen(!isOpen)}>{children}</MainButton>
      <DropdownMenu $isOpen={isOpen} $dropdownPosition={position}>
        {options.map((option) => (
          <DropdownButton
            key={option.key}
            onClick={() => handleButtonClick(option.key)}
          >
            {option.label}
          </DropdownButton>
        ))}
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
