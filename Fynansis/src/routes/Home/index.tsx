import axios from "axios";
import NavBar from "../../components/navbar/navbar";

const API_URL = "http://localhost:8080/investimento";

export function Home() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")

  const getData = async (idInvestiment: string) => {
    try {
      const response = await axios.get(API_URL + "/retornarInvestimentos/" + isAuth);
      // setDescricao(response.data.descricao);
      // setSigla(response.data.sigla);
      // setTipo(response.data.tipo);
      // setInstituicao(response.data.instituicao);
    } catch (error: any) {
      
    }
  };

  return (
    <div className="container">
      <NavBar userName={nameFromUser} navHome/>
      <h1>home</h1>
    </div>
  );
}
