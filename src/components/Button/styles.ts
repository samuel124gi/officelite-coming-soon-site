import styled from "@emotion/styled";
import colors from "../../styles/colors";
import type { ButtonVariant } from "../../types/component";

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  ${({ variant }) =>
    variant === "primary" &&
    `
  width: 170px;
  color: ${colors.primary01};
  background: ${colors.secondary01};
`}
  ${({ variant }) =>
    variant === "secondary" &&
    `
    
  width: 170px;
  color: ${colors.secondary01};
  background: ${colors.secondary03};
`}  ${({ variant }) =>
    variant === "tertiary" &&
    `
  color: ${colors.primary01};
  width: 360px;
  background: ${colors.secondary01};
`}
  font-size: 16px;
  height: 50px;
  border-radius: 24px;
  border: none;
  letter-spacing: 0px;
  line-height: 100%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
