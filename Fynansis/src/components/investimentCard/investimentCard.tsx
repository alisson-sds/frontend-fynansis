import "./styles.css";

interface InvestimentCardProps {
  sigla: string;
  descricao?: string;
  instituicao: string;
}

export const InvestimentCard = ({ sigla, descricao, instituicao }: InvestimentCardProps) => (
  <div className="investimentCard">
    <h2>{sigla}</h2>
    <p>{descricao}</p>
    <h3>{instituicao}</h3>
    <button>Aportes</button>
  </div>
);
