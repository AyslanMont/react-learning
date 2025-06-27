import "./MyForm.css";
import { useState } from "react";

export default function MyForm() {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const handlename = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTarefas([...tarefas, tarefa]);
  };

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome..."
            onChange={handlename}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          {/* 4 - Simplificação de manipulação de state */}
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Tarefa:</span>
          <input
            type="text"
            name="tarefa"
            placeholder="Tarefa"
            onChange={(e) => setTarefa(e.target.value)}
          />
        </label>

        <input type="submit" value="Enviar" />
      </form>

      <div>
        <p>Nome: {name}</p>
        <p>email: {email}</p>

        <ul>
          {tarefas.map((tarefa) => {
            return <li>{tarefa}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
