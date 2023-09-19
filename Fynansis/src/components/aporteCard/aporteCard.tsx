import "./styles.css";
import { AportData } from "../../interface/aportData";
import { useState } from "react";

export const AportCard = ({
  dataCompra,
  valorCompra,
  numCotas,
  codAport,
  deleteAporteFunc,
  detalheAporte = false,
}: AportData) => {
  function formatData(dataCompra: string): string {
    const date = parseInt(dataCompra, 10);

    const data = new Date(date);

    return data.toLocaleDateString("pt-BR");
  }
  const [abreAporte, setAbreAporte] = useState(detalheAporte);

  return (
    <div className="">
      {abreAporte ? (
        <div className="AportCardOpenned">
          <div className="input-aport-card">
            <label>Valor total: R$</label>            
            <input value={valorCompra * numCotas} />
          </div>
          <div className="input-aport-card">
            <label>Valor pago: R$</label>
            <input value={valorCompra} />
          </div>
          <div className="input-aport-card">
            <label>Cotas: </label>
            <input value={numCotas} />
          </div>
          <div className="input-aport-card">
            <label>Data compra: </label>
            <input value={formatData(dataCompra)} />
          </div>
          <div className="div-icons-aport">
            <i className="fa-solid fa-pen"></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => deleteAporteFunc(codAport)}
            ></i>
            <i
              className="fa-solid fa-arrow-up"
              onClick={() => setAbreAporte(!abreAporte)}
            ></i>
          </div>
        </div>
      ) : (
        <div className="AportCardClosed">
          <h2>R$ {valorCompra * numCotas}</h2>
          <p>{formatData(dataCompra)}</p>
          <div className="div-icons-aport">
            <i className="fa-solid fa-pen"></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => deleteAporteFunc(codAport)}
            ></i>
            <i
              className="fa-solid fa-arrow-down"
              onClick={() => setAbreAporte(!abreAporte)}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};
