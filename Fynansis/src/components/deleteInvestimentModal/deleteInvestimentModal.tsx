import axios from "axios";
import "./styles.css";

const API_URL = "http://localhost:8080/investimento";

interface ModalProps {
  codInvestimento: string;
  updateValue: (value: string) => void;
}

const deleteInvestiment = async (idInvestiment: string) => {
  try {
    const response = await axios.delete(API_URL + "/deletar/" + idInvestiment);
  } catch (error: any) {
    console.log("Erro ao deletar investimento!");
  }
};

export const DeleteInvestimentModal = ({
  codInvestimento,
  updateValue,
}: ModalProps) => (
  <dialog className="modal" open>
    <h2>Deseja excluir?</h2>
    <div className="div-delete-buttons">
      <button onClick={() => updateValue("")}>Voltar</button>
      <button onClick={() => deleteInvestiment(codInvestimento)}>
        Excluir
      </button>
    </div>
  </dialog>
);
