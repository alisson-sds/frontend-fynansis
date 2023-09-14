import "./styles.css";
import { AportData } from "../../interface/aportData";

export const AportCard = ({ dataCompra, valorCompra, numCotas }: AportData) => {
  function formatData(dataCompra: string): string {
    const date = parseInt(dataCompra, 10);

    const data = new Date(date);

    return data.toLocaleDateString("pt-BR");
  }

  return (
    <div className="AportCard">
      <h2>R$ {valorCompra * numCotas}</h2>
      <p>Data: {formatData(dataCompra)}</p>
      <div className="div-buttons-aport">
        <i className="fa-solid fa-pen"></i>
        <i className="fa-solid fa-xmark"></i>
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
};
