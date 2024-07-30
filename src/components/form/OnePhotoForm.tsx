import { FC, useEffect, useState } from "react";
import { InputProps } from "@components/Input/Input";
import { FormControlProps, IndentStylesProps } from "@type/common";
import { useFormContext } from "@hooks/useFormContext";
import FieldError from "./FieldError";
import styled from "styled-components";
import Flex from "@components/Flex";
import IconButton from "@components/Button/IconButton";
import CrossIcon from "@components/icons/CrossIcon";
import { Paragraph } from "@components/Typography";

export type OnePhotoFormProps = Omit<
  InputProps,
  "value" | "onChange" | "onBlur"
> &
  FormControlProps &
  IndentStylesProps;

export type FormPhotoItem =
  | { id: number; type: "url"; file: string }
  | { id: number; type: "file"; file: File };

const FormGallary = styled(Flex)`
  overflow: hidden;
`;

const PreImg = styled.div<{ $url: string }>`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  background-image: url(${(props) => props.$url});
  background-position: center;
  background-size: cover;
  position: relative;
`;

const PreImgCross = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const PhotoLabel = styled.label`
  div {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #888;
    padding: 8px;
    cursor: pointer;
    display: flex;
    margin-top: 16px;
  }

  input {
    display: none;
  }
`;

const OnePhotoForm: FC<OnePhotoFormProps> = ({ name }) => {
  const { controlValue, setControlValue, setControlTouched, getControlError } =
    useFormContext(name);
  const error = getControlError();
  const [local, setLocal] = useState<{ link: string; id: number } | null>(null);

  useEffect(() => {
    if (controlValue)
      setLocal({
        id: controlValue.id,
        link:
          controlValue.type === "file"
            ? URL.createObjectURL(controlValue.file)
            : controlValue.file,
      });
  }, [controlValue]);

  return (
    <>
      <PhotoLabel>
        <Flex justify="center">
          <Paragraph>+ Добавить фото</Paragraph>
        </Flex>
        <input
          id="file"
          name="file"
          accept="image/png, image/jpeg, image/webp, image/jpg, image/jpeg, image/tiff, image/raw, image/gif"
          type="file"
          onChange={(event) =>
            setControlValue({
              file:
                (event.currentTarget.files && event.currentTarget.files[0]) ||
                "",
              type: "file",
              id: Math.round(Math.random() * 1000000),
            })
          }
          onBlur={setControlTouched}
        />
      </PhotoLabel>
      {
        <FormGallary
          wrap="wrap"
          justify="space-around"
          gap="16px"
          $top="medium"
        >
          {local && local.link && (
            <PreImg $url={local.link}>
              <PreImgCross
                onClick={() => {
                  setControlValue({
                    file: "",
                    id: 0,
                    type: "link",
                  });
                }}
                icon={<CrossIcon size={30} color="#fff" />}
              />
            </PreImg>
          )}
        </FormGallary>
      }
      <FieldError error={error} />
    </>
  );
};

export default OnePhotoForm;
