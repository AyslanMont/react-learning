import "./App.css";
import ButtonStatus from "./components/ButtonStatus";
import Task from "./components/task";
import tarefas from "./tarefas";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Dashboard>
        {tarefas.map((tarefa) => {
          return (
            <Task
              id={tarefa.id}
              titulo={tarefa.titulo}
              user_status={tarefa.concluida}
            >
            </Task>
          );
        })}
      </Dashboard>
    </>
  );
}
export default App;
