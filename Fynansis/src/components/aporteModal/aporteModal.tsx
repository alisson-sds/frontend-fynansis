import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { AportCard } from "../aporteCard/aporteCard";
import { Overlay } from "../overlay/overlay";
import { DeleteInvestimentModal } from "../deleteInvestimentModal/deleteInvestimentModal";

interface ModalProps {
  codInvestimento: string;
  updateValue: (value: string) => void;
}

const API_URL = "http://localhost:8080/aporte";

export const AporteModal = ({ codInvestimento, updateValue }: ModalProps) => {
  const [data, setData] = useState<any[]>([]);

  const [deleteAporte, setDeleteAporte] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        API_URL + "/retornarAportes/" + codInvestimento
      );
      setData(response.data);
    } catch (error: any) {
      console.log("Aportes não encontrados");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="aporteModal">
      <h1 className="h1-modal-aporte">Aportes:</h1>
      {data.map((aportes) => (
        <AportCard
          codAport={aportes.codAporte}
          dataCompra={aportes.dataCompra}
          valorCompra={aportes.valorCompra}
          numCotas={aportes.numCotas}
          deleteAporteFunc={setDeleteAporte}
        />
      ))}
      {deleteAporte && (    
          <>
          <Overlay className="overlay" updateValue={setDeleteAporte}/>          
          <DeleteInvestimentModal
            codDelete={deleteAporte}
            updateValue={setDeleteAporte}
            callBack={getData}
            type={"aporte"}
          />
          </>
        )}
      <button onClick={() => updateValue("")} className="button-aport-modal">
        Voltar
      </button>
    </div>
  );
};
