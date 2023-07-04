import { Link } from "react-router-dom"
import './styles.css'

export function Home() {

  return (
    <div className='container'>
      
      <h1>Login</h1>
      <input type="text" placeholder="Login"></input>
      <input type="password" placeholder="Senha"></input>
      <button type="button">Entrar</button>
      <button type="button">
        <Link to="/register">Cadastrar</Link>
      </button>
      
    </div>
  )
}
