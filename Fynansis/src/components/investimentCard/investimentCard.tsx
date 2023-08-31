import "./styles.css";

interface InvestimentCardProps {
  sigla: string;
  tipo: string;
  instituicao: string;
}

export const InvestimentCard = ({ sigla, tipo, instituicao }: InvestimentCardProps) => (
  <div className="investimentCard">
    <h2>{sigla}</h2>
    <p>{tipo}</p>
    <p>{instituicao}</p>
    <button>Aportes</button>
  </div>
);
