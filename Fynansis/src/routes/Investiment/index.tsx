import Navbar from "../../components/navbar/navbar";

export function Investiment() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")

  return (
    <div>    
      <Navbar userName={nameFromUser} />    
      <h1>Investiments</h1>
    </div>
  );
}