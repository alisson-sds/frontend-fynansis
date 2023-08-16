import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
  required?: boolean;
  type?: HTMLInputTypeAttribute
  minLength?: number
  maxLength?: number
  disabled?: boolean;
}

export const Input = ({
  label,
  value,
  required = false,
  type = "text",
  minLength,
  maxLength,
  disabled,
  updateValue,
}: InputProps) => (
  <input
    value={value}
    onChange={(e) => updateValue(e.target.value)}
    placeholder={label}
    required={required}
    type={type}
    minLength={minLength}
    maxLength={maxLength}
    disabled={disabled}
  />
);
