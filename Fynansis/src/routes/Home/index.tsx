import NavBar from "../../components/navbar/navbar";

export function Home() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")

  return (
    <div className="container">
      <NavBar userName={nameFromUser} navHome/>
      <h1>home</h1>
    </div>
  );
}
