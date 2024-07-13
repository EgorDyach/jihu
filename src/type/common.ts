export type Indent =
  | "none"
  | "xsmall"
  | "small"
  | "xmedium"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "vlarge";

export interface IndentStylesProps {
  $top?: Indent;
  $left?: Indent;
}

export type FontSize =
  | "small"
  | "default"
  | "big"
  | "title"
  | "subheader"
  | "header"
  | "heroMedium"
  | "heroLarge";
