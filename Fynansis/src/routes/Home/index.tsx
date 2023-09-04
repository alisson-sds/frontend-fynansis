import axios from "axios";
import NavBar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { InvestimentCard } from "../../components/investimentCard/investimentCard";

import "./styles.css";

const API_URL = "http://localhost:8080/investimento";

export function Home() {
  const [data, setData] = useState<any[]>([]);

  const isAuth = localStorage.getItem("token");
  const nameFromUser = localStorage.getItem("nameFromLoggedUser");

  const getData = async () => {
    try {
      const response = await axios.get(
        API_URL + "/retornarInvestimentos/" + isAuth
      );
      setData(response.data);
    } catch (error: any) {
      console.log("Investimentos não encontrados")
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <NavBar userName={nameFromUser} navHome />
      <div className="modal">
        <h1>Selic</h1>
        <h3>Aportes:</h3>
      </div>
      <h1>Investimentos</h1>
      <div className="modal-container">
      {data.map(investiment => (
        <InvestimentCard
          sigla={investiment.sigla}
          tipo={investiment.tipo}
          instituicao={investiment.instituicao}
          codInvest={investiment.codInvestimento}
        />
      ))}
      </div>
    </div>
  );
}
