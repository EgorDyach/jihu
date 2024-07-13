import styled from "styled-components";
import { withIndentStyles } from "@hocs/withIndentStyles";
import { radius } from "@lib/theme/sizes";

interface ImageProps {
  $size?: string;
  $width?: string;
  $maxWidth?: string;
  $maxHeight?: string;
  $maxSize?: string;
  $height?: string;
  $borderRadius?: number;
}

const StyledImage = styled.img<ImageProps>`
  height: ${({ $size, $height }) => $size || $height || "100%"};
  width: ${({ $size, $width }) => $size || $width || "100%"};
  height: ${({ $maxSize, $maxHeight }) => $maxSize || $maxHeight || "100%"};
  width: ${({ $maxSize, $maxWidth }) => $maxSize || $maxWidth || "100%"};
  border-radius: ${({ $borderRadius }) => $borderRadius || radius.xLarge};
  object-fit: cover;
  -o-object-fit: cover;
`;

const Image = withIndentStyles(StyledImage);

export default Image;
