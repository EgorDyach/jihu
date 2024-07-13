import { FC } from "react";
import { withIndentStyles } from "@hocs/withIndentStyles";
import { StyledButton } from "@components/Button/ButtonStyles";
import { ButtonProps, ButtonSize, ButtonWidth } from "@components/Button/types";

const RawButton: FC<ButtonProps> = ({
  children,
  type = "default",
  htmlType = "button",
  size = "medium",
  width = "auto",
  onClick,
  disabled,
  loading,
  icon,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      htmlType={htmlType}
      size={ButtonSize[size]}
      block={width === ButtonWidth.full}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      icon={icon}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const Button = withIndentStyles(RawButton);

export default Button;
