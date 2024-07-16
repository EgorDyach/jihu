import styled from "styled-components";
import { withIndentStyles } from "@hocs/withIndentStyles";
import { indent } from "@lib/theme/sizes";

const Label = withIndentStyles(styled.label<{ $bottomIndent?: boolean }>`
  margin-bottom: ${({ $bottomIndent = true }) =>
    $bottomIndent ? indent.small : indent.none};
  font-size: 14px;
  line-height: 24px;
  display: inline-block;
`);

export default Label;
