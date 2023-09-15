import axios from "axios";
import "./styles.css";

const INVESTIMENTO_API_URL = "http://localhost:8080/investimento";

const APORTE_API_URL = "http://localhost:8080/aporte";

interface ModalProps {
  codDelete: string;
  updateValue: (value: string) => void;
  callBack: () => any;
  type: string;
}

export const DeleteInvestimentModal = ({
  codDelete,
  updateValue,
  callBack,
  type,
}: ModalProps) => {
  const deleteInvestiment = async (idDelete: string, type: string) => {
    if (type == "invest") {
      try {
        await axios.delete(INVESTIMENTO_API_URL + "/deletar/" + idDelete);
        callBack();
        updateValue("");
      } catch (error: any) {
        console.log("Erro ao deletar investimento!");
      }
    } else {
      try {
        await axios.delete(APORTE_API_URL + "/deletar/" + idDelete);
        callBack();
        updateValue("");
      } catch (error: any) {
        console.log("Erro ao deletar aporte!");
      }
    }
  };
  return (
    <div className="delete-modal">
      <h2>Deseja excluir?</h2>
      <div className="div-delete-buttons">
        <button onClick={() => deleteInvestiment(codDelete, type)}>
          Excluir
        </button>
        <button onClick={() => updateValue("")}>Voltar</button>
      </div>
    </div>
  );
};
