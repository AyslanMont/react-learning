import "./Dashboard.css"

export default function Dashboard({children}){
    return (
        <div className="dashboard">
            <h1>Dashboard Tarefas</h1>
            
            {children}
        </div>
    )
}