import axios from "axios";
import "./styles.css";

const API_URL = "http://localhost:8080/investimento";

interface ModalProps {
  codInvestimento: string;
  updateValue: (value: string) => void;
  callBack: () => any;
}

export const DeleteInvestimentModal = ({
  codInvestimento,
  updateValue,
  callBack
}: ModalProps) => {



  const deleteInvestiment = async (idInvestiment: string) => {
    try {
      await axios.delete(API_URL + "/deletar/" + idInvestiment);
      callBack();
      updateValue("");
    } catch (error: any) {
      console.log("Erro ao deletar investimento!");
    }
  };
  return (
    <div className="modal">
      <h2>Deseja excluir?</h2>
      <div className="div-delete-buttons">
        <button onClick={() => deleteInvestiment(codInvestimento)}>
          Excluir
        </button>
        <button onClick={() => updateValue("")}>Voltar</button>
      </div>
    </div>
  );
};
