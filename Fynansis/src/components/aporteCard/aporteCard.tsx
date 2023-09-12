import "./styles.css";
import { AportData } from "../../interface/aportData";

export const AportCard = ({
  dataCompra,
  valorCompra,
  numCotas,
}: AportData) => (
  <div className="AportCard">
    <h2>{valorCompra * numCotas}</h2>
    <p>{valorCompra}</p>
    <p>{dataCompra}</p>
    <div className="div-buttons">
      <button>Aportes</button>
    </div>
  </div>
);
