import { Link } from "react-router-dom";
import "./styles.css";

interface NavBarProps {
  userName?: string | null;
}

export default function NavBar({ userName }: NavBarProps) {
  return (
    <nav className="navBar">
      <div>
        <Link to="/home" className="nav-link">
          <i className="fa-solid fa-house"></i>    
        </Link>

        <h3>Olá, {userName}</h3>   
        
        <Link to="/profile"  className="nav-link">
          <i className="fa-regular fa-user"></i>         
        </Link>
      </div>
    </nav>
  );
}
