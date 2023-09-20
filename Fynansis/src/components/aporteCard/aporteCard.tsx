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
  disable = true,
}: AportData) => {
  function formatData(dataCompra: string): string {
    const date = parseInt(dataCompra, 10);

    const data = new Date(date);

    return data.toLocaleDateString("pt-BR");
  }

  const [abreAporte, setAbreAporte] = useState(detalheAporte);

  const [isDisable, setIsDisable] = useState(disable);

  function updateFunc() {
    setAbreAporte(true);
    setIsDisable(!isDisable);
  }

  function arrowUpFunc() {
    setAbreAporte(!abreAporte);
    setIsDisable(true);
  }

  return (
    <div className="">
      {abreAporte ? (
        <form className="AportCardOpenned">
          <div className="input-aport-card">
            <label>Valor total: R$</label>
            <input value={valorCompra * numCotas} disabled={true}/>
          </div>
          <div className="input-aport-card">
            <label>Valor pago: R$</label>
            <input value={valorCompra} disabled={isDisable} />
          </div>
          <div className="input-aport-card">
            <label>Cotas: </label>
            <input value={numCotas} disabled={isDisable} />
          </div>
          <div className="input-aport-card">
            <label>Data compra: </label>
            <input value={formatData(dataCompra)} disabled={isDisable} />
          </div>
          <div className="div-icons-aport">
            {isDisable? (
                <i className="fa-solid fa-pen" onClick={updateFunc}></i>
            ) : (
              <>
              <i className="fa-solid fa-check"></i>
              <i className="fa-solid fa-x" onClick={() => setIsDisable(!isDisable)}></i>
              </>
            )}
            
            <i
              className="fa-solid fa-trash"
              onClick={() => deleteAporteFunc(codAport)}
            ></i>
            <i className="fa-solid fa-arrow-up" onClick={arrowUpFunc}></i>
          </div>
        </form>
      ) : (
        <div className="AportCardClosed">
          <h2>R$ {valorCompra * numCotas}</h2>
          <p>{formatData(dataCompra)}</p>
          <div className="div-icons-aport">
            <i className="fa-solid fa-pen" onClick={updateFunc}></i>
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
