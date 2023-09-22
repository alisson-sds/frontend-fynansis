import "./styles.css";
import { AportData } from "../../interface/aportData";
import { FormEvent, useState } from "react";
import axios from "axios";

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

  const APORTE_API_URL = "http://localhost:8080/aporte";

  const [abreAporte, setAbreAporte] = useState(detalheAporte);

  const [isDisable, setIsDisable] = useState(disable);

  const [aporteValorCompra, setAporteValorCompra] =
    useState<number>(valorCompra);
  const [aporteNumCotas, setAporteNumCotas] = useState<number>(numCotas);
  const [aporteDataCompra, setAporteDataCompra] = useState(dataCompra);

  function updateFunc() {
    setAbreAporte(true);
    setIsDisable(!isDisable);
  }

  function arrowUpFunc() {
    setAbreAporte(!abreAporte);
    setIsDisable(true);
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const aporteData = {
      valorCompra: aporteValorCompra,
      numCotas: aporteNumCotas,
      dataCompra: aporteDataCompra,
    };
    try {
      await axios.put(APORTE_API_URL + "/atualizar/" + codAport, aporteData);
      alert("Aporte atualizado!");
    } catch (error: any) {
      alert("Erro ao atualizar o aporte!");
    }
    setIsDisable(!isDisable);
  };

  return (
    <div className="">
      {abreAporte ? (
        <form className="AportCardOpenned" onSubmit={submit}>
          <div className="input-aport-card">
            <label>Valor total: R$</label>
            <input value={aporteValorCompra * aporteNumCotas} disabled={true} />
          </div>
          <div className="input-aport-card">
            <label>Valor pago: R$</label>
            <input
              value={aporteValorCompra}
              onChange={(e) => setAporteValorCompra(Number(e.target.value))}
              disabled={isDisable}
              type="number"
            />
          </div>
          <div className="input-aport-card">
            <label>Cotas: </label>
            <input
              value={aporteNumCotas}
              onChange={(e) => setAporteNumCotas(Number(e.target.value))}
              disabled={isDisable}
            />
          </div>
          <div className="input-aport-card">
            <label>Data compra: </label>
            <input
              value={aporteDataCompra}
              onChange={(e) => setAporteDataCompra(e.target.value)}
              disabled={isDisable}
              type="date"
            />
          </div>
          <div className="div-icons-aport">
            {isDisable ? (
              <i className="fa-solid fa-pen" onClick={updateFunc}></i>
            ) : (
              <>
                <button type="submit" id="check-button">
                  <i className="fa-solid fa-check" />
                </button>
                <i
                  className="fa-solid fa-x"
                  onClick={() => setIsDisable(!isDisable)}
                ></i>
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
          <p>{dataCompra}</p>
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
