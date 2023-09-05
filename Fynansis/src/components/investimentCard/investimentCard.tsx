import { Link } from "react-router-dom";
import "./styles.css";
import { InvestimentData } from "../../interface/investimentData";

export const InvestimentCard = ({
  sigla,
  tipo,
  instituicao,
  codInvest,
  updateValue,
}: InvestimentData) => (
  <div className="investimentCard">
    <h2>{sigla}</h2>
    <p>{tipo}</p>
    <p>{instituicao}</p>
    <div className="div-buttons">
      <button onClick={() => updateValue(codInvest)}>Aportes</button>
      <Link to={"/investiment/" + codInvest}>
        <button>Editar</button>
      </Link>
    </div>    
  </div>
);
