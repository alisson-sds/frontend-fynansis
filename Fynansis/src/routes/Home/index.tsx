import "./styles.css";

export function Home() {
  const isAuth = localStorage.getItem("token");

  return (
    <div className="container">
      <script src="https://kit.fontawesome.com/ed5eb338b3.js" crossOrigin="anonymous"></script>
      <nav className="navBar">
        <ul>
          <li>List</li>
          <li>Olá Alisson</li>
          <li></li>                   
        </ul>
      </nav>
      <h1>home</h1>
    </div>
  );
}
