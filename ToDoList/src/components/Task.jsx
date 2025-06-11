import { useState } from "react";
import "./Task.css"

export default function Task({ id, titulo, user_status, children }) {

  const [status, setStatus] = useState(user_status);

  function mudaStatus(){
    if (status === false){
      setStatus(true)
    }else{
      setStatus(false)
    }
  }

  return (
    <div className={status ? "concluida" : "pendente"}>
      <h2>{titulo}</h2>
      <p>ID: {id}</p>
      <p>Status: {status ? "Concluida" : "Pendente"}</p>
      <button onClick={mudaStatus}>Marcar como {status ? "pendente" : "concluida"}</button>
      {children}
    </div>
  );
}
