import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  label,
  color,
  onClick,
}: ButtonProps) => (
  <button
    onClick={onClick}
    style={{backgroundColor:color ?? "initial"}}    
    type="button"
  >
    {label}
  </button>
);
