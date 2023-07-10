import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/input";
import { LoginData } from "../../interface/loginData";
import './styles.css'
import axios from "axios";

const API_URL = "http://localhost:8080/usuario";

export function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    const loginData: LoginData = {
      login,
      senha
    };

    try {
      await axios.post(API_URL + "/login", loginData)
      alert("Login feito!")  
      navigate("/home")
    } catch (error: any) {
      alert("Credenciais incorretas!")
    }

  };

  return (
    <div className='container'>
      
      <h1>Login</h1>
      <Input label="Login" value={login} updateValue={setLogin}/>
      <Input label="Senha" value={senha} updateValue={setSenha}/>
      <button type="button" onClick={submit}>Entrar</button>
      <Link to="/register">
        <button type="button">
        Cadastrar
        </button>
      </Link>

    </div>
  )
}
