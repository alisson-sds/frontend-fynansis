import "./styles.css";
import { AportData } from "../../interface/aportData";

export const AportCard = ({
  dataCompra,
  valorCompra,
  numCotas,
}: AportData) => {


  function formatData(dataCompra: string): string {
    const date = parseInt(dataCompra, 10);

    const data = new Date(date);

    return data.toLocaleDateString('pt-BR');

  };

  return (
  <div className="AportCard">
    <h2>Total: {valorCompra * numCotas}</h2>
    <p>Compra: {valorCompra}</p>
    <p>Data: {formatData(dataCompra)}</p>
    <div className="div-buttons-aport">
      <button>Editar</button>
      <button>Excluir</button>
    </div>
  </div>
)}
;
