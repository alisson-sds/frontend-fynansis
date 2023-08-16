import Navbar from "../../components/navbar/navbar";

export function Profile() {
  const isAuth = localStorage.getItem("token")
  const nameFromUser = localStorage.getItem("nameFromLoggedUser")

  return (
    <div>    
      <Navbar userName={nameFromUser} />    
      <h1>Profile</h1>
    </div>
  );
}