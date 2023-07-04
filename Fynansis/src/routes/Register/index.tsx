import '../Home/styles.css'
import { Link } from "react-router-dom"

export function Register() {

  return (
    <div className='container'>
      
      <h1>Cadastrar</h1>
      <input type="text" placeholder="Login"></input>
      <input type="password" placeholder="Senha"></input>
      <input type="text" placeholder="Login"></input>
      <input type="password" placeholder="Senha"></input>
      <button type="button">
        <Link to="/">Voltar</Link>
      </button>
      <button type="button">Cadastrar</button>
      
    </div>
  )
}
