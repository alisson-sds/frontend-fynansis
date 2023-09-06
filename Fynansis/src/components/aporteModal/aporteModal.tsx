import "./styles.css";

interface ModalProps {
  codInvestimento: string;
  updateValue: (value: string) => void;
}

export const AporteModal = ({
  codInvestimento,
  updateValue,
}: ModalProps) => (
  <dialog className="modal" open>
    <h1>Selic</h1>
    <h3>Aportes:</h3>
    <button onClick={() => updateValue("")}>Voltar</button>
  </dialog>
);
