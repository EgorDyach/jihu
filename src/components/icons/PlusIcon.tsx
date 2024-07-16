import withIcon from "@hocs/withIcon";
import { FC, SVGProps } from "react";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.31335C10.4142 4.31335 10.75 4.64914 10.75 5.06335V9.56348H15.25C15.6642 9.56348 16 9.89926 16 10.3135C16 10.7277 15.6642 11.0635 15.25 11.0635H10.75V15.5634C10.75 15.9776 10.4142 16.3134 10 16.3134C9.58579 16.3134 9.25 15.9776 9.25 15.5634V11.0635H4.75C4.33579 11.0635 4 10.7277 4 10.3135C4 9.89926 4.33579 9.56348 4.75 9.56348H9.25V5.06335C9.25 4.64914 9.58579 4.31335 10 4.31335Z"
        fill="currentColor"
      />
    </svg>
  );
};

const PlusIcon = withIcon(Icon);

PlusIcon.displayName = "PlusIcon";
export default PlusIcon;
