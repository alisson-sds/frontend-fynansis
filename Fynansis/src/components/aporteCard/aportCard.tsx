import "./styles.css";
import { AportData } from "../../interface/aportData";

export const InvestimentCard = ({
  dataCompra,
  valorCompra,
  numCotas,
}: AportData) => (
  <div className="investimentCard">
    <h2>{valorCompra * numCotas}</h2>
    <p>{valorCompra}</p>
    <p>{dataCompra}</p>
    <div className="div-buttons">
      <button>Aportes</button>
    </div>
  </div>
);
