import { FC, useState } from "react";
import Input, { InputProps } from "@components/Input/Input";
import { IndentStylesProps } from "@type/common";
import { StyledEyeIcon } from "@components/Input/InputStyles";

const PasswordInput: FC<Omit<InputProps, "type"> & IndentStylesProps> = (
  props,
) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      {...props}
      type={showPassword ? "string" : "password"}
      suffix={
        <StyledEyeIcon
          size={20}
          className="ant-input-clear-icon"
          onClick={() => setShowPassword(!showPassword)}
        />
      }
    />
  );
};

export default PasswordInput;
