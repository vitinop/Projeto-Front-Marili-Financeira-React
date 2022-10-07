import { useState } from "react";
import {BsChatLeft} from "react-icons/bs"
import "./Formulario.css";

export default function Formulario() {
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="form-container p-4 d-flex flex-column align-items-center justify-content-center text-center">
      <h3>Vamos Conversar?</h3>
      <BsChatLeft className="mb-4" size={40}/>

      <p>
        ​Conta pra nós os teus objetivos e os teus desafios, e através de uma
        análise personalizada,  vamos te ajudar a manter a estabilidade
        financeira do teu patrimônio de uma forma SUSTENTÁVEL.
      </p>

      

      <form
        className="formField d-flex flex-column  align-items-center"
        onSubmit={() => {}}
      >
        <input
          className="input"
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="tel"
          placeholder="Telefone"
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />

        <input
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          className="input"
          type="text"
          placeholder="Assunto"
          onChange={(e) => setAssunto(e.target.value)}
          value={assunto}
        />

        <textarea
          className="textarea"
          placeholder="Como podemos ajudar?"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}
