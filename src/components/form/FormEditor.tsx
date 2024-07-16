import { CKEditor } from "@ckeditor/ckeditor5-react";
import { InputProps } from "@components/Input/Input";
import { useFormContext } from "@hooks/useFormContext";
import { FormControlProps, IndentStylesProps } from "@type/common";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  FontFamily,
  FontSize,
  TodoList,
  List,
  Heading,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import { FC } from "react";
import FieldError from "./FieldError";
import Label from "@components/Label";
import { withIndentStyles } from "@hocs/withIndentStyles";

export type FormInputProps = Omit<InputProps, "value" | "onChange" | "onBlur"> &
  FormControlProps &
  IndentStylesProps;

const RawEditor: FC<FormInputProps> = ({ name, label, className }) => {
  const { controlValue, setControlValue, setControlTouched, getControlError } =
    useFormContext(name);
  const error = getControlError();
  return (
    <>
      {label && <Label className={className}>{label}</Label>}
      <CKEditor
        editor={ClassicEditor}
        data={controlValue}
        onChange={(_, editor) => {
          setControlValue(editor.getData());
        }}
        onBlur={() => setControlTouched()}
        config={{
          image: {
            insert: {
              // This is the default configuration, you do not need to provide
              // this configuration key if the list content and order reflects your needs.
              integrations: ["upload", "assetManager", "url"],
            },
          },
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "bold",
              "italic",
              "|",
              "heading",
              "fontSize",
              "fontFamily",
              "|",
              "todoList",
              "bulletedList",
              "numberedList",
            ],
          },
          plugins: [
            Bold,
            Essentials,
            Italic,
            Mention,
            Paragraph,
            Undo,
            FontFamily,
            Heading,
            FontSize,
            TodoList,
            List,
          ],
          initialData: "",
        }}
      />
      <FieldError error={error} />
    </>
  );
};

const FormEditor = withIndentStyles(RawEditor);
export default FormEditor;
