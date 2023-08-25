import { FormEvent, useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { InvestimentData } from "../../interface/investimentData";
import { Input } from "../../components/input/input";
import { Link } from "react-router-dom";
import "./styles.css";

const API_URL = "http://localhost:8080/investimento";

export function Investiment() {
  const [descricao, setDescricao] = useState("");
  const [sigla, setSigla] = useState("");
  const [tipo, setTipo] = useState("");
  const [instituicao, setInstituicao] = useState("");

  const isAuth = localStorage.getItem("token");
  const nameFromUser = localStorage.getItem("nameFromLoggedUser");

  const getData = async (idInvestiment: string) => {
    try {
      const response = await axios.get(API_URL + "/ler/" + idInvestiment);
      setDescricao(response.data.descricao);
      setSigla(response.data.sigla);
      setTipo(response.data.tipo);
      setInstituicao(response.data.instituicao);
    } catch (error: any) {
      alert("Erro ao buscar dados do Investimento!");
    }
  };

  useEffect(() => {
    // getData("cad9f062-5820-4790-a0a9-aa63545277ee");
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    const investimentData: InvestimentData = {
      descricao,
      sigla,
      tipo,
      instituicao,
    };
    try {
      const response = await axios.post(
        API_URL + "/criar/" + isAuth,
        investimentData
      );
      alert("Investimento criado!");
    } catch (error: any) {
      alert("Erro ao criar investimento!");
    }
  };

  return (
    <>
      <Navbar userName={nameFromUser} />
      <div className="container">
        <h1>Investiments</h1>
        <form onSubmit={submit} className="investimentForm">
          <Input
            label="Descricao"
            value={descricao}
            updateValue={setDescricao}
          />

          <Input label="Sigla" value={sigla} updateValue={setSigla} />

          <Input label="Tipo" value={tipo} updateValue={setTipo} />

          <Input
            label="Instituição"
            value={instituicao}
            updateValue={setInstituicao}
          />

          <div>
            <button type="submit">Criar</button>
            <Link to="/home">
              <button type="button">Voltar</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
