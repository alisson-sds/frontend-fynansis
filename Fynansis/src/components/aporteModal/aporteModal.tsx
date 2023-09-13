import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { AportCard } from "../aporteCard/aporteCard";

interface ModalProps {
  codInvestimento: string;
  updateValue: (value: string) => void;
}

const API_URL = "http://localhost:8080/aporte";

export const AporteModal = ({ codInvestimento, updateValue }: ModalProps) => {
  const [data, setData] = useState<any[]>([]);

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
        key={aportes.codAporte}
          dataCompra={aportes.dataCompra}
          valorCompra={aportes.valorCompra}
          numCotas={aportes.numCotas}
        />
      ))}
      <button onClick={() => updateValue("")} className="button-aport-modal">Voltar</button>
    </div>
  );
};
