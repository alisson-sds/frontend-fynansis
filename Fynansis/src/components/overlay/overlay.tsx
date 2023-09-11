import "./styles.css";

interface OverlayProps {
  className: string;
  updateValue(value: any): void;
}

export const Overlay = ({ className, updateValue }: OverlayProps) => (
  <div className={className} onClick={() => updateValue("")} />
);
