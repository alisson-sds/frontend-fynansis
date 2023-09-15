import "./styles.css";
import { AportData } from "../../interface/aportData";
import { useState } from "react";

export const AportCard = ({
  dataCompra,
  valorCompra,
  numCotas,
  codAport,
}: AportData) => {
  function formatData(dataCompra: string): string {
    const date = parseInt(dataCompra, 10);

    const data = new Date(date);

    return data.toLocaleDateString("pt-BR");
  }

  const [selectedAport, setSelectedAport] = useState("");

  return (
    <div className="AportCard">
      <h2>R$ {valorCompra * numCotas}</h2>
      <p>{formatData(dataCompra)}</p>
      <div className="div-icons-aport">
        <i className="fa-solid fa-pen" onClick={() => setSelectedAport(selectedAport)}></i>
        <i className="fa-solid fa-trash" onClick={() => setSelectedAport(selectedAport)}></i>
        <i className="fa-solid fa-arrow-down" onClick={() => setSelectedAport(selectedAport)}></i>
      </div>
    </div>
  );
};
