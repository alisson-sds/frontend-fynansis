import Navbar from "../../components/navbar/navbar";

export function Investiment() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")

  return (
    <div>    
      <Navbar />    
      <h1>Investiments</h1>
    </div>
  );
}