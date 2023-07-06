interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
  }
  
export const Input = ({ label, value, updateValue }: InputProps) => (
    <input
      value={value}
      onChange={(e) => updateValue(e.target.value)}
      placeholder={label}
    />
);