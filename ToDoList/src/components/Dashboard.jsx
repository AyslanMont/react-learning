import { useState } from "react"
import "./Dashboard.css"

export default function Dashboard({children}){

    const [tema, setTema] = useState("ligth")
    function mudaTema(){
        if (tema === "ligth"){
            setTema("dark")
        }else{
            setTema("ligth")
        }
    }

    return (
        <div className={`dashboard ${tema}`}>
            <h1>Dashboard Tarefas</h1>
            <button onClick={mudaTema}>Mudar tema</button>
            {children}
        </div>
    )
}