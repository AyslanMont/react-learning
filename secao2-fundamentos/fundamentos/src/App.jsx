import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CartaoUsuario from "./components/CartaoUsuario";
import "./components/CartaoUsuario.css";

function App() {
  const [tema, setTema] = useState(true);

  function mudaTema() {
    if (tema === true) {
      setTema(false);
    } else {
      setTema(true);
    }
  }

  return (
    <div className={tema ? "light" : "dark"}>
      <button onClick={mudaTema}>Mudar tema</button>
      <CartaoUsuario
        nome="Ayslan"
        email="ayslan.moneteiro@escolar.ifrn.edu.br"
        idade={18}
      >
        <li>Instagram: ayslanmon</li>
        <li>Bio: Ninguém inveja o ruim, ninguém odeia o fraco...</li>
      </CartaoUsuario>
    </div>
  );
}

export default App;
