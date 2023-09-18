import "./styles.css";
import { AportData } from "../../interface/aportData";
import { useActionData } from "react-router-dom";
import { useState } from "react";

export const AportCard = ({
  dataCompra,
  valorCompra,
  numCotas,
  codAport,
  deleteAporteFunc,
  detalheAporte = false
}: AportData) => {
  function formatData(dataCompra: string): string {
    const date = parseInt(dataCompra, 10);

    const data = new Date(date);    

    return data.toLocaleDateString("pt-BR");
  }
  const [abreAporte, setAbreAporte] = useState(detalheAporte);

  return (
    <div className="AportCard">
      <h2>R$ {valorCompra * numCotas}</h2>
      <p>{formatData(dataCompra)}</p>
      <div className="div-icons-aport">
        <i className="fa-solid fa-pen"></i>
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteAporteFunc(codAport)}
        ></i>
        <i className="fa-solid fa-arrow-down" onClick={() => setAbreAporte(!abreAporte)}></i>        
      </div>      
      {abreAporte? 
      (<p>aaaaa</p>)
      :
      (<p>bbbbb</p>)}      
    </div>
  );
};
