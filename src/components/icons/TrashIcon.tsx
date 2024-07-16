import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";
const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 0C5.89543 0 5 0.89543 5 2V3H3H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5H2V19C2 20.6569 3.34315 22 5 22H15C16.6569 22 18 20.6569 18 19V5H19C19.5523 5 20 4.55228 20 4C20 3.44772 19.5523 3 19 3H17H15V2C15 0.895431 14.1046 0 13 0H7ZM13 3H7V2H13V3ZM6 5H14H16V19C16 19.5523 15.5523 20 15 20H5C4.44772 20 4 19.5523 4 19V5H6ZM9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44771 7 10V15C7 15.5523 7.44771 16 8 16C8.55228 16 9 15.5523 9 15V10ZM12 9C12.5523 9 13 9.44772 13 10V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V10C11 9.44771 11.4477 9 12 9Z"
      fill="currentColor"
    />
  </svg>
);

const TrashIcon = withIcon(Icon);

TrashIcon.displayName = "TrashIcon";
export default TrashIcon;
