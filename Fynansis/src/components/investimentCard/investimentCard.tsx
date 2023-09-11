import { Link } from "react-router-dom";
import "./styles.css";
import { InvestimentData } from "../../interface/investimentData";

export const InvestimentCard = ({
  sigla,
  tipo,
  instituicao,
  codInvest,
  updateValue,
  deleteInvestimentFunc,
}: InvestimentData) => (
  <div className="investimentCard">
    <div className="investimentCard-title">
      <h2>{sigla}</h2>
      <button className="fa-solid fa-trash" onClick={() => deleteInvestimentFunc(codInvest)}>
      </button>
    </div>
    <p className="tipo-investimentCard">{tipo}</p>
    <p className="inst-investimentCard">{instituicao}</p>
    <div className="div-buttons">
      <button onClick={() => updateValue(codInvest)}>Aportes</button>
      <Link to={"/investiment/" + codInvest}>
        <button>Editar</button>
      </Link>
    </div>
  </div>
);
