import { FormEvent, useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { InvestimentData } from "../../interface/investimentData";
import { Input } from "../../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const API_URL = "http://localhost:8080/investimento";

export function Investiment() {
  const [descricao, setDescricao] = useState("");
  const [sigla, setSigla] = useState("");
  const [tipo, setTipo] = useState("");
  const [instituicao, setInstituicao] = useState("");

  const navigate = useNavigate();

  const isAuth = localStorage.getItem("token");
  const nameFromUser = localStorage.getItem("nameFromLoggedUser");
  const selectedInvest = localStorage.getItem("selectedInvest") || "";

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

  const options = [
    {label: "Poupança", value: "Poupança"},
    {label: "CDB", value: "CDB"},
    {label: "Tesouro Direto", value: "Tesouro Direto"},
    {label: "Ações", value: "Ações"},
    {label: "Fundos de Investimento", value: "Fundos de Investimento"},
    {label: "Fundos Imobiliários", value: "Fundos Imobiliários"},
    {label: "Títulos Privados", value: "Títulos Privados"},
    {label: "Mercado de Câmbio (Forex)", value: "Forex"},
    {label: "Mercado de Commodities", value: "Mercado de Commodities"},
    {label: "Bitcoin e Criptomoedas", value: "Bitcoin e Criptomoedas"},
    {label: "Previdência Privada", value: "Previdência Privada"},
    {label: "LCI", value: "LCI"},
    {label: "LCA", value: "LCA"},
    {label: "Debêntures", value: "Debêntures"},
    {label: "Fundos Multimercado", value: "Fundos Multimercado"},
    {label: "Fundos de Renda Fixa", value: "Fundos de Renda Fixa"},
    {label: "Fundos de Ações", value: "Fundos de Ações"},
    {label: "Fundos de Previdência", value: "Fundos de Previdência"},
    {label: "CRA", value: "CRA"},
    {label: "CRI", value: "CRI"}
]

  useEffect(() => {
    if(selectedInvest !== null && selectedInvest !== ""){
      getData(selectedInvest);
    } else{
      alert("não encontrei")
    } 
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
      navigate("/home");
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

          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            {options.map(({value, label}) => (
              <option value={value}>{label}</option>
            ))}
          </select>

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
