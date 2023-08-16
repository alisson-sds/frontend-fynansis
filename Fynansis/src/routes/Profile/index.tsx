import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input/input";
import Navbar from "../../components/navbar/navbar";
import { FormEvent, useState } from "react";
import { UserData } from "../../interface/userData";
import axios from "axios";

const API_URL = "http://localhost:8080/usuario";

export function Profile() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")

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
      const response = axios.post(API_URL + "/atualizar", userData);
      alert("Usuario cadastrado!");
      navigate("/");
    } catch (error: any) {
      alert("Cpf ou email já cadastrados!");
    }
  };

  return (
    <div className="container">    
      <Navbar userName={nameFromUser} />    
      
      <form onSubmit={submit} className="form">
        <Input label="Nome" value={nome} updateValue={setNome} required  disabled={true}/>
        <Input
          label="Email"
          value={email}
          updateValue={setEmail}
          required
          type="email"
          disabled={true}
        />
        <Input
          label="Login"
          value={login}
          updateValue={setLogin}
          required
          minLength={5}
          maxLength={20}
          disabled={true}
        />
        <Input
          label="Senha"
          value={senha}
          updateValue={setSenha}
          required
          type="password"
          minLength={12}
          maxLength={30}
          disabled={true}
        />
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
        
        <div>
          <button>Editar</button>
          <button type="submit">Atualizar</button>
          <Link to="/home">
          <button type="button">Voltar</button>
          </Link>
        </div>
      </form>      
    </div>
  );
}