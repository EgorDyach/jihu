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

export type FormPhotosProps = Omit<
  InputProps,
  "value" | "onChange" | "onBlur"
> &
  FormControlProps &
  IndentStylesProps;

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

const FormPhotos: FC<FormPhotosProps> = ({ name }) => {
  const { controlValue, setControlValue, setControlTouched, getControlError } =
    useFormContext(name);
  const error = getControlError();
  const [local, setLocal] = useState<{ link: string; id: number }[]>([]);

  useEffect(() => {
    setLocal(
      controlValue.map((file: { id: number; file: File }) => ({
        id: file.id,
        link: URL.createObjectURL(file.file),
      })),
    );
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
          multiple
          onChange={(event) => {
            const newPhotos = [];
            if (event.currentTarget.files)
              for (let i = 0; i < event.currentTarget.files.length; i++) {
                newPhotos.push({
                  file: event.currentTarget.files[i],
                  id: Math.floor(Math.random() * 1000000),
                });
              }
            setControlValue([...controlValue, ...newPhotos]);
          }}
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
          {local.map((el) => {
            return (
              <PreImg $url={el.link}>
                <PreImgCross
                  onClick={() => {
                    setControlValue(
                      controlValue.filter(
                        (c: { id: number; file: File }) => c.id !== el.id,
                      ),
                    );
                  }}
                  icon={<CrossIcon size={30} color="#fff" />}
                />
              </PreImg>
            );
          })}
        </FormGallary>
      }
      <FieldError error={error} />
    </>
  );
};

export default FormPhotos;
