import { Link } from "react-router-dom";
import "./styles.css";

interface InvestimentCardProps {
  sigla: string;
  tipo: string;
  instituicao: string;
  codInvest: string;
}

export const InvestimentCard = ({
  sigla,
  tipo,
  instituicao,
  codInvest,
}: InvestimentCardProps) => (
  <div className="investimentCard">
    <h2>{sigla}</h2>
    <p>{tipo}</p>
    <p>{instituicao}</p>
    <div className="div-buttons">
      <button>Aportes</button>
      <Link to={"/investiment/" + codInvest}>
        <button>Editar</button>
      </Link>
    </div>
  </div>
);
