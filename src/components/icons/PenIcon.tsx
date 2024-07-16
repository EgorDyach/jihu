import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";
const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8912 1.0481C12.5623 0.377012 13.4725 0 14.4216 0C16.3979 0 18 1.60212 18 3.57843C18 4.52748 17.623 5.43767 16.9519 6.10876L5.28033 17.7803C5.13968 17.921 4.94891 18 4.75 18H0.75C0.335786 18 0 17.6642 0 17.25V13.25C0 13.0511 0.0790176 12.8603 0.21967 12.7197L11.8912 1.0481ZM14.4216 1.5C13.8703 1.5 13.3417 1.71898 12.9519 2.10876L12.5607 2.5L15.5 5.43934L15.8912 5.0481C16.281 4.65832 16.5 4.12966 16.5 3.57843C16.5 2.43054 15.5695 1.5 14.4216 1.5ZM14.4393 6.5L11.5 3.56066L1.5 13.5607V16.5H4.43934L14.4393 6.5Z"
      fill="currentColor"
    />
  </svg>
);

const PenIcon = withIcon(Icon);

PenIcon.displayName = "PenIcon";
export default PenIcon;
