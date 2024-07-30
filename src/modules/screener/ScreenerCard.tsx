import { FC, ReactNode } from "react";

interface ScreenerCardProps {
  element: ReactNode;
}

export const ScreenerCard: FC<ScreenerCardProps> = ({ element }) => {
  return <div style={{ position: "relative" }}>{element}</div>;
};
