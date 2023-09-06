import { FormEvent, useState } from "react";
import "../Login/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../interface/userData";
import { Input } from "../../components/input/input";
import axios from "axios";

const API_URL = "http://localhost:8080/usuario";

export function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState(0);
  const navigate = useNavigate();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const userData: UserData = {
      nome,
      email,
      login,
      senha,
      cpf,
    };
    try {
      const response = axios.post(API_URL + "/criar", userData);
      alert("Usuario cadastrado!");
      navigate("/");
    } catch (error: any) {
      alert("Cpf ou email já cadastrados!");
    }
  };

  return (
    <div className="login-container">
      <h1>Cadastrar</h1>
      <form onSubmit={submit} className="login-form">
        <Input label="Nome" value={nome} updateValue={setNome} required />
        <Input
          label="Email"
          value={email}
          updateValue={setEmail}
          required
          type="email"
        />
        <Input
          label="Login"
          value={login}
          updateValue={setLogin}
          required
          minLength={5}
          maxLength={20}
        />
        <Input
          label="Senha"
          value={senha}
          updateValue={setSenha}
          required
          type="password"
          minLength={12}
          maxLength={30}
        />
        <Input
          label="Cpf"
          value={cpf}
          updateValue={setCpf}
          required
          type="number"
          minLength={11}
          maxLength={11}
        />

        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
