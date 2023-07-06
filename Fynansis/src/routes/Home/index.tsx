import { useState } from "react";
import { Link } from "react-router-dom"
import { useLoginDataMutate } from "../hooks/useLoginDataMutate";
import { Input } from "../../components/input";
import { LoginData } from "../../interface/loginData";
import './styles.css'


export function Home() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const { mutate } = useLoginDataMutate();

  const submit = () => {
    const loginData: LoginData = {
      login,
      senha
    };
    mutate(loginData);
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
