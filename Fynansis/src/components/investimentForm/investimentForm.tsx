import { FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../input/input";

interface FormsProps {
  descricao?: string;
  sigla?: string;
  tipo?: string;
  instituicao?: string;
  submit: FormEventHandler<HTMLFormElement>;
  buttonText: string;
}

const [descricao, setDescricao] = useState("");
const [sigla, setSigla] = useState("");
const [tipo, setTipo] = useState("");
const [instituicao, setInstituicao] = useState("");

export const InvestimentForm = ({
  descricao,
  sigla,
  tipo,
  instituicao,
  submit,
  buttonText,
}: FormsProps) => (
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
      <button type="submit">{buttonText}</button>
      <Link to="/home">
        <button type="button">Voltar</button>
      </Link>
    </div>
  </form>
);
