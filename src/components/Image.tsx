import styled from "styled-components";
import { withIndentStyles } from "@hocs/withIndentStyles";

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
  max-height: ${({ $maxSize, $maxHeight }) => $maxSize || $maxHeight || "100%"};
  max-width: ${({ $maxSize, $maxWidth }) => $maxSize || $maxWidth || "100%"};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  object-fit: cover;
  -o-object-fit: cover;
`;

const Image = withIndentStyles(StyledImage);

export default Image;
