import withIcon from "@hocs/withIcon";
import { FC, SVGProps } from "react";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 19V1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13L7 19L1 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowDownIcon = withIcon(Icon);

ArrowDownIcon.displayName = "ArrowDownIcon";
export default ArrowDownIcon;
