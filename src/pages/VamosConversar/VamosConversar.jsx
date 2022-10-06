import { useState } from 'react';
import { Container } from "react-bootstrap";
import './VamosConversar.css';


export default function Formulário() {
  const [name, setName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Container className=' p-0 m-0 form-container d-flex justify-content-center align-itens-center'>

      <form className="form d-flex align-items-stretch  flex-wrap flex-column" onSubmit={() => { }}>
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

    </Container>
  );
}
