import type { ButtonVariant } from "../../types/component";
import { StyledButton } from "./styles";

interface ButtonProps {
  variant: ButtonVariant;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant, label, children, onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {label || children}
    </StyledButton>
  );
};

export default Button;
