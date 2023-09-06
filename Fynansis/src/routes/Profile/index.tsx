import { Link } from "react-router-dom";
import { Input } from "../../components/input/input";
import Navbar from "../../components/navbar/navbar";
import { FormEvent, useEffect, useState } from "react";
import { UserData } from "../../interface/userData";
import axios from "axios";
import { Button } from "../../components/button/button";
import "./style.css";

const API_URL = "http://localhost:8080/usuario";

export function Profile() {
  const isAuth = localStorage.getItem("token");
  const nameFromUser = localStorage.getItem("nameFromLoggedUser");

  const [disabled, setDisabled] = useState<boolean>(true);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState(0);

  const buttonText = disabled ? "Editar" : "Cancelar"; //Define Text do botão partindo do state de Editar

  const buttonColor = disabled ? "#00fd8f" : "#f2f2ec"; //Define cor do botão de edição de registro

  const lockType = disabled ? "fa-solid fa-lock" : "fa-solid fa-lock-open"; //Define ícone de Lock input

  const getData = async () => {
    try {
      const response = await axios.get(API_URL + "/ler/" + isAuth);
      setNome(response.data.nomeUsuario);
      setEmail(response.data.emailUsuario);
      setLogin(response.data.loginUsuario);
      setSenha(response.data.senhaUsuario);
      setCpf(response.data.cpfUsuario);
    } catch (error: any) {
      alert("Erro ao buscar dados do usuário!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
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
      const response = await axios.put(
        API_URL + "/atualizar/" + isAuth,
        userData
      );      
      getData();
      localStorage.setItem("nameFromLoggedUser", response.data.nomeUsuario);
      alert("Usuario atualizado!");
    } catch (error: any) {
      alert("Erro ao atualizar o usuário!");
    }
    setDisabled(!disabled);
  };

  return (
    <div className="profileContainer">
      <Navbar userName={nameFromUser} />

      <form className="login-form" onSubmit={submit}>
        <div className="inputLock">
          <Input
            label="Nome"
            value={nome}
            updateValue={setNome}
            required
            disabled={disabled}
          />
          <i className={lockType}></i>
        </div>
        <div className="inputLock">
          <Input
            label="Email"
            value={email}
            updateValue={setEmail}
            required
            type="email"
            disabled={true}
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className="inputLock">
          <Input
            label="Login"
            value={login}
            updateValue={setLogin}
            required
            minLength={5}
            maxLength={20}
            disabled={disabled}
          />
          <i className={lockType}></i>
        </div>
        <div className="inputLock">
          <Input
            label="Senha"
            value={senha}
            updateValue={setSenha}
            required
            type="password"
            minLength={12}
            maxLength={30}
            disabled={disabled}
          />
          <i className={lockType}></i>
        </div>
        <div className="inputLock">
          <Input
            label="Cpf"
            value={cpf}
            updateValue={setCpf}
            required
            type="number"
            minLength={11}
            maxLength={11}
            disabled={true}
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <div>
          <Button
            label={buttonText}
            color={buttonColor}
            onClick={() => setDisabled(!disabled)}
          />
          <button type="submit">Atualizar</button>
          <Link to="/home">
            <button type="button">Voltar</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
