import axios from "axios";
import NavBar from "../../components/navbar/navbar";
import { useEffect } from "react";
import { InvestimentCard } from "../../components/investimentCard/investimentCard";

const API_URL = "http://localhost:8080/investimento";

export function Home() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")

  const getData = async () => {
    try {
      const response = await axios.get(API_URL + "/retornarInvestimentos/" + isAuth);
      console.log(response);
      // setDescricao(response.data.descricao);
      // setSigla(response.data.sigla);
      // setTipo(response.data.tipo);
      // setInstituicao(response.data.instituicao);
    } catch (error: any) {
      
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <NavBar userName={nameFromUser} navHome/>
      <h1>home</h1>
      <InvestimentCard sigla="CDB" descricao="CDB Banco do Brasil" instituicao="XP Investimentos"/>
    </div>
  );
}
