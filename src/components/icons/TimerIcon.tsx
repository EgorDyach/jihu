import withIcon from "@hocs/withIcon";
import { FC, SVGProps } from "react";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M55 110C24.6235 110 0 85.3765 0 55C0 24.6235 24.6235 0 55 0C85.3765 0 110 24.6235 110 55C110 85.3765 85.3765 110 55 110ZM55 99C66.6695 99 77.8611 94.3643 86.1127 86.1127C94.3643 77.8611 99 66.6695 99 55C99 43.3305 94.3643 32.1389 86.1127 23.8873C77.8611 15.6357 66.6695 11 55 11C43.3305 11 32.1389 15.6357 23.8873 23.8873C15.6357 32.1389 11 43.3305 11 55C11 66.6695 15.6357 77.8611 23.8873 86.1127C32.1389 94.3643 43.3305 99 55 99V99ZM60.5 55H82.5V66H49.5V27.5H60.5V55Z"
        fill="currentColor"
      />
    </svg>
  );
};

const TimerIcon = withIcon(Icon);

TimerIcon.displayName = "TimerIcon";
export default TimerIcon;
