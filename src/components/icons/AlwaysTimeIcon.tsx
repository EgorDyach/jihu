import withIcon from "@hocs/withIcon";
import { FC, SVGProps } from "react";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M55 60.5C64.1135 60.5 71.5 67.8865 71.5 77C71.5 81.675 69.5585 85.888 66.44 88.891L55.935 99H71.5V110H38.5V100.518L58.8115 80.9655C59.8565 79.959 60.5 78.5565 60.5 77C60.5 73.964 58.036 71.5 55 71.5C51.964 71.5 49.5 73.964 49.5 77H38.5C38.5 67.8865 45.8865 60.5 55 60.5ZM88 60.5V82.5H99V60.5H110V110H99V93.5H77V60.5H88ZM11 55C11 68.8985 17.4405 81.29 27.5 89.353V102.641C11.0605 93.1315 0 75.361 0 55H11ZM55 0C83.5175 0 106.97 21.7085 109.725 49.5H98.659C95.953 27.797 77.44 11 55 11C39.875 11 26.532 18.6285 18.6175 30.25H33V41.25H0V8.25H11V22C21.032 8.635 37.0095 0 55 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

const AlwaysTimeIcon = withIcon(Icon);

AlwaysTimeIcon.displayName = "AlwaysTimeIcon";
export default AlwaysTimeIcon;
