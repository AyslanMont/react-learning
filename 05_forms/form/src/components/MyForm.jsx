import "./MyForm.css";
import { useState } from "react";

export default function MyForm({ user }) {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handlename = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTarefas([...tarefas, tarefa]);
    console.log(name, email, bio, role);

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
    setTarefa("");
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
            value={name}
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
            value={email}
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

        {/* 8 - Textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 - Select */}
        <label>
          <span>Função no sistema:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Adimistrador</option>
          </select>
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
