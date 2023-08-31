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
      console.log(response);
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
      <h1>home</h1>
      <div className="modal-container">
      {data.map(investiment => (
        <InvestimentCard
          sigla={investiment.sigla}
          tipo={investiment.tipo}
          instituicao={investiment.instituicao}
        />
      ))}
      </div>
    </div>
  );
}
