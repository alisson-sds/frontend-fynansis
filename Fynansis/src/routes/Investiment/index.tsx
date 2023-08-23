import { InvestimentForm } from "../../components/investimentForm/investimentForm";
import Navbar from "../../components/navbar/navbar";

export function Investiment() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")   
  const idInvest = ""; 

  return (
    <div>    
      <Navbar userName={nameFromUser} />    
      <h1>Investiments</h1>
      <InvestimentForm />
    </div>
  );
}