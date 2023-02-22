import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <ButtonStyled>
      <button className="button-expression" onClick={onClick}>
        {label}
      </button>
    </ButtonStyled>
  );
};

export default Button;
