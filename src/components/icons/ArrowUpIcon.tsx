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
        d="M7 1V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7L7 1L13 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowUpIcon = withIcon(Icon);

ArrowUpIcon.displayName = "ArrowUpIcon";
export default ArrowUpIcon;
