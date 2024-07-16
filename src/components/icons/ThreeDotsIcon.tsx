import { FC } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = () => (
  <svg viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3.75C1.17157 3.75 0.5 3.07843 0.5 2.25C0.5 1.42157 1.17157 0.75 2 0.75C2.82843 0.75 3.5 1.42157 3.5 2.25C3.5 3.07843 2.82843 3.75 2 3.75ZM2 10.5C1.17157 10.5 0.5 9.82843 0.5 9C0.5 8.17157 1.17157 7.5 2 7.5C2.82843 7.5 3.5 8.17157 3.5 9C3.5 9.82843 2.82843 10.5 2 10.5ZM0.5 15.75C0.5 16.5784 1.17157 17.25 2 17.25C2.82843 17.25 3.5 16.5784 3.5 15.75C3.5 14.9216 2.82843 14.25 2 14.25C1.17157 14.25 0.5 14.9216 0.5 15.75Z"
      fill="#272E35"
    />
  </svg>
);

const ThreeDotsIcon = withIcon(Icon);

ThreeDotsIcon.displayName = "ThreeDotsIcon";
export default ThreeDotsIcon;
