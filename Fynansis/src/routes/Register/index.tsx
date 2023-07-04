import { useState } from 'react'
import '../Home/styles.css'
import { Link } from "react-router-dom"
import { useUserDataMutate } from '../hooks/useUserDataMutate'
import { UserData } from '../../interface/userData'

interface InputProps {
  label: string,
  value: string | number,
  updateValue(value: any): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
  return (
    <>   
      <input value={value} onChange={e => updateValue(e.target.value)} placeholder={label}></input>
    </>
  )
}

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
      cpf  
    }
    mutate(userData)
  }

  return (
    <div className='container'>
      
      <h1>Cadastrar</h1>
      
        <Input label='Nome'  value={nome} updateValue={setNome}></Input>
        <Input label='Email' value={email} updateValue={setEmail}></Input>
        <Input label='Login' value={login} updateValue={setLogin}></Input>
        <Input label='Senha' value={senha} updateValue={setSenha}></Input>
        <Input label='Cpf'   value={cpf} updateValue={setCpf}></Input>
     
      <button type="button">
        <Link to="/">Voltar</Link>
      </button>
      <button type="button" onClick={submit}>Cadastrar</button>
      
    </div>
  )
}
