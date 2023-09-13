import axios from "axios";
import NavBar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { InvestimentCard } from "../../components/investimentCard/investimentCard";

import "./styles.css";
import { AporteModal } from "../../components/aporteModal/aporteModal";
import { DeleteInvestimentModal } from "../../components/deleteInvestimentModal/deleteInvestimentModal";
import { Overlay } from "../../components/overlay/overlay";

const API_URL = "http://localhost:8080/investimento";

export function Home() {
  const [data, setData] = useState<any[]>([]);

  const [selectedInvestiment, setSelectedInvestiment] = useState("");

  const [deleteInvestiment, setDeleteInvestiment] = useState("");

  const isAuth = localStorage.getItem("token");
  const nameFromUser = localStorage.getItem("nameFromLoggedUser");

  const getData = async () => {
    try {
      const response = await axios.get(
        API_URL + "/retornarInvestimentos/" + isAuth
      );
      setData(response.data);
    } catch (error: any) {
      console.log("Investimentos não encontrados");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (    
      <div className="container">
        
        <NavBar userName={nameFromUser} navHome />        
        {selectedInvestiment && (    
          <>
          <Overlay className="overlay" updateValue={setSelectedInvestiment}/>
          <AporteModal
            codInvestimento={selectedInvestiment}
            updateValue={setSelectedInvestiment}
          />
          </>
        )}
        {deleteInvestiment && (    
          <>
          <Overlay className="overlay" updateValue={setDeleteInvestiment}/>          
          <DeleteInvestimentModal
            codInvestimento={deleteInvestiment}
            updateValue={setDeleteInvestiment}
            callBack={getData}
          />
          </>
        )}
        <h1 className="h1-home">Investimentos</h1>
        <div className="card-container">
          {data.map((investiment) => (
            <InvestimentCard
              key={investiment.codInvestimento}
              sigla={investiment.sigla}
              tipo={investiment.tipo}
              instituicao={investiment.instituicao}
              codInvest={investiment.codInvestimento}
              updateValue={setSelectedInvestiment}
              deleteInvestimentFunc={setDeleteInvestiment}
            />
          ))}
        </div>
      
    </div>
  );
}
