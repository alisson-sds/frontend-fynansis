import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input/input";
import { LoginData } from "../../interface/loginData";
import "./styles.css";
import axios from "axios";

const API_URL = "http://localhost:8080/usuario";

export function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const loginData: LoginData = {
      login,
      senha,
    };

    try {
      const response = await axios.post(API_URL + "/login", loginData);
      localStorage.setItem("token", response.data.codUsuario);
      localStorage.setItem("nameFromLoggedUser", response.data.nomeUsuario);
      alert("Login feito!");
      navigate("/home");
    } catch (error: any) {
      alert("Credenciais incorretas!");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={submit} className="login-form">
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
        <button type="submit" id="loginButton">
          Entrar
        </button>
        <Link to="/register">
          <button type="button">Cadastrar</button>
        </Link>
      </form>
    </div>
  );
}
