import { FormEvent } from "react";
import { InvestimentForm } from "../../components/investimentForm/investimentForm";
import Navbar from "../../components/navbar/navbar";

export function Investiment() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")  

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    
  }

  return (
    <div>    
      <Navbar userName={nameFromUser} />    
      <h1>Investiments</h1>
      <InvestimentForm submit={submit} buttonText="Criar"/>
    </div>
  );
}