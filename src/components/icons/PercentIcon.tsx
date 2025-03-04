import withIcon from "@hocs/withIcon";
import { FC, SVGProps } from "react";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M88.6111 110C82.9384 110 77.4981 107.747 73.4869 103.735C69.4757 99.7242 67.2222 94.2838 67.2222 88.6111C67.2222 82.9384 69.4757 77.4981 73.4869 73.4869C77.4981 69.4757 82.9384 67.2222 88.6111 67.2222C94.2838 67.2222 99.7242 69.4757 103.735 73.4869C107.747 77.4981 110 82.9384 110 88.6111C110 94.2838 107.747 99.7242 103.735 103.735C99.7242 107.747 94.2838 110 88.6111 110ZM88.6111 97.7778C91.0423 97.7778 93.3738 96.812 95.0929 95.0929C96.812 93.3738 97.7778 91.0423 97.7778 88.6111C97.7778 86.18 96.812 83.8484 95.0929 82.1293C93.3738 80.4102 91.0423 79.4444 88.6111 79.4444C86.18 79.4444 83.8484 80.4102 82.1293 82.1293C80.4102 83.8484 79.4444 86.18 79.4444 88.6111C79.4444 91.0423 80.4102 93.3738 82.1293 95.0929C83.8484 96.812 86.18 97.7778 88.6111 97.7778ZM21.3889 42.7778C18.5801 42.7778 15.7987 42.2245 13.2037 41.1496C10.6087 40.0748 8.2508 38.4993 6.26466 36.5131C4.27852 34.527 2.70302 32.1691 1.62813 29.5741C0.553239 26.979 0 24.1977 0 21.3889C0 18.5801 0.553239 15.7987 1.62813 13.2037C2.70302 10.6087 4.27852 8.2508 6.26466 6.26466C8.2508 4.27852 10.6087 2.70302 13.2037 1.62813C15.7987 0.553239 18.5801 -5.91916e-08 21.3889 0C27.0616 1.19543e-07 32.5019 2.25347 36.5131 6.26466C40.5243 10.2759 42.7778 15.7162 42.7778 21.3889C42.7778 27.0616 40.5243 32.5019 36.5131 36.5131C32.5019 40.5243 27.0616 42.7778 21.3889 42.7778ZM21.3889 30.5556C23.82 30.5556 26.1516 29.5898 27.8707 27.8707C29.5898 26.1516 30.5556 23.82 30.5556 21.3889C30.5556 18.9577 29.5898 16.6262 27.8707 14.9071C26.1516 13.188 23.82 12.2222 21.3889 12.2222C18.9577 12.2222 16.6262 13.188 14.9071 14.9071C13.188 16.6262 12.2222 18.9577 12.2222 21.3889C12.2222 23.82 13.188 26.1516 14.9071 27.8707C16.6262 29.5898 18.9577 30.5556 21.3889 30.5556ZM98.2117 3.14722L106.853 11.7883L11.7944 106.853L3.15333 98.2117L98.2056 3.14722H98.2117Z"
        fill="currentColor"
      />
    </svg>
  );
};

const PercentIcon = withIcon(Icon);

PercentIcon.displayName = "PercentIcon";
export default PercentIcon;
