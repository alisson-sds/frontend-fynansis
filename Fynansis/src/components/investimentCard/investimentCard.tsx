import { Link } from "react-router-dom";
import "./styles.css";

interface InvestimentCardProps {
  sigla: string;
  tipo: string;
  instituicao: string;
  codInvest: string;
}

const saveInvest = async (investiment: string) => {
  localStorage.setItem("selectedInvest", investiment);
};

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
      <Link to="/investiment">
        <button onClick={() => saveInvest(codInvest)}>Editar</button>
      </Link>
    </div>
  </div>
);
