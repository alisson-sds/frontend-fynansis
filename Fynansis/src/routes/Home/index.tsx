import { Link } from "react-router-dom"
import './styles.css'

export function Home() {

  return (
    <div className='container'>
      
      <h1>Login</h1>
      <input type="text" placeholder="Login"/>
      <input type="password" placeholder="Senha"/>
      <button type="button">Entrar</button>
      <Link to="/register">
        <button type="button">
        Cadastrar
        </button>
      </Link>

    </div>
  )
}
