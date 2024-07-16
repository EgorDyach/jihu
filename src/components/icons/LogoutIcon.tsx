import withIcon from "@hocs/withIcon";
import { FC, SVGProps } from "react";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2836_17202)">
        <path d="M24 0H0V24H24V0Z" fill="white" fill-opacity="0.01" />
        <path
          d="M11.9958 3H3V21H12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 16.5L21 12L16.5 7.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 11.9961H21"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2836_17202">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LogoutIcon = withIcon(Icon);

LogoutIcon.displayName = "LogoutIcon";
export default LogoutIcon;
