import { useState } from "react";
import "../Login/styles.css";
import { Link } from "react-router-dom";
import { useUserDataMutate } from "../hooks/useUserDataMutate";
import { UserData } from "../../interface/userData";
import { Input } from "../../components/input";


export function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState(0);
  const { mutate } = useUserDataMutate();

  const submit = () => {
    const userData: UserData = {
      nome,
      email,
      login,
      senha,
      cpf,
    };
    mutate(userData);
  };

  return (
    <div className="container">
      <h1>Cadastrar</h1>

      <Input label="Nome" value={nome} updateValue={setNome}/>
      <Input label="Email" value={email} updateValue={setEmail}/>
      <Input label="Login" value={login} updateValue={setLogin}/>
      <Input label="Senha" value={senha} updateValue={setSenha}/>
      <Input label="Cpf" value={cpf} updateValue={setCpf}/>

      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
      <button type="button" onClick={submit}>
        Cadastrar
      </button>
    </div>
  );
}
