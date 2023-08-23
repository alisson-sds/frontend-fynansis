import { Link } from "react-router-dom";
import { Input } from "../input/input";
import { FormEvent, useState } from "react";
import axios from "axios";
import { InvestimentData } from "../../interface/investimentData";

const API_URL = "http://localhost:8080/investimento";

const [descricao, setDescricao] = useState("");
const [sigla, setSigla] = useState("");
const [tipo, setTipo] = useState("");
const [instituicao, setInstituicao] = useState("");
interface FormsProps {
  idUser?: string;
  idInvestiment?: string;
}

const submit = async (event: FormEvent<HTMLFormElement>) => {
  const investimentData: InvestimentData = {
    descricao,
    sigla,
    tipo,
    instituicao,
  };
};

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

export const InvestimentForm = () => (
  <form onSubmit={submit}>
    <Input label="Descricao" value={descricao} updateValue={setDescricao} />

    <Input label="Sigla" value={sigla} updateValue={setSigla} />

    <Input label="Tipo" value={tipo} updateValue={setTipo} />

    <Input
      label="Instituição"
      value={instituicao}
      updateValue={setInstituicao}
    />

    <div>
      <button type="submit"></button>
      <Link to="/home">
        <button type="button">Voltar</button>
      </Link>
    </div>
  </form>
);
