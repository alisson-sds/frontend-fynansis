import "./styles.css";

interface ModalProps {
  label: string;
  codInvestimento: string;
  updateValue: (value: string) => void;
}

export const AporteModal = ({
  label,
  codInvestimento,
  updateValue,
}: ModalProps) => (
  <dialog className="modal" open>
    <h1>{label}</h1>
    <h3>Aportes:</h3>
    <button onClick={() => updateValue("")}>Voltar</button>
  </dialog>
);
