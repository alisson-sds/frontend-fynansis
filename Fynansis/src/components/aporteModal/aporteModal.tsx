import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

interface ModalProps {
  codInvestimento: string;
  updateValue: (value: string) => void;
}

const API_URL = "http://localhost:8080/investimento";

export const AporteModal = ({
  codInvestimento,
  updateValue,
}: ModalProps) => {

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

  return(
  <div className="aporteModal">
    <h1>Aportes:</h1>
    <button onClick={() => updateValue("")}>Voltar</button>
  </div>
  )
};
