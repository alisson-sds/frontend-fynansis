import "./styles.css";

interface ModalProps {
  codInvestimento: string;
  updateValue: (value: string) => void;
}

export const AporteModal = ({
  codInvestimento,
  updateValue,
}: ModalProps) => (
  <div className="aporteModal">
    <h1>Selicc</h1>
    <h3>Aportes:</h3>
    <button onClick={() => updateValue("")}>Voltar</button>
  </div>
);
