import "./styles.css";

interface NavBarProps {
  userName?: string | null;
}

export default function NavBar({ userName }: NavBarProps) {
  return (
    <nav className="navBar">
      <ul>
        <li>List</li>
        <li>Olá, {userName}</li>
        <li></li>
      </ul>
    </nav>
  );
}
