import React, { useState } from "react";
import { BsChatLeft } from "react-icons/bs";
import "./Formulario.css";

export default function Formulario() {

  const valoresIniciais = {
    name: "",
    telefone: "",
    email: "",
    assunto: "",
    message: ""
  };

  const [formValues, setFormValues] = useState(valoresIniciais);

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });
  
  const getChange = (event, key) => {
    const { value } = event.currentTarget;
    setFormValues({ ...formValues, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (validate()) {
      setStatus({
        type: "success",
        mensagemStatus: "Mensagem enviada com sucesso!"
      });
      setFormValues({
        name: "",
        telefone: "",
        email: "",
        assunto: "",
        message: ""
      });
    } else {
      setStatus({
        type: "error",
        mensagemStatus: "Preencha todos campos corretamente!"
      });
    }

    console.log("new", formValues);


  };
  



 
  function validate() {
    if (!formValues.name)
      return setStatus({
        type: "error",
        mensagemStatus: "Erro: Necessário preencher o campo nome!"
      });
    if (!formValues.telefone)
      return setStatus({
        type: "error",
        mensagemStatus: "Erro: Necessário preencher o telefone!"
      });
    if (!formValues.email)
      return setStatus({
        type: "error",
        mensagemStatus: "Erro: Necessário preencher de email!"
      });
    if (!formValues.assunto)
      return setStatus({
        type: "error",
        mensagemStatus: "Erro: Necessário preencher o campo assunto!"
      });
    if (!formValues.message)
      return setStatus({
        type: "error",
        mensagemStatus: "Erro: Necessário preencher o campo com sua mensagem!"
      });
    return true;
  }

  return (
    <div className="form-container d-flex flex-column align-items-center justify-content-center text-center">
      <h3>Vamos Conversar?</h3>
      <BsChatLeft className="mb-4" size={40} />

      <p>
        ​Conta pra nós os teus objetivos e os teus desafios, e através de uma
        análise personalizada,  vamos te ajudar a manter a estabilidade
        financeira do teu patrimônio de uma forma SUSTENTÁVEL.
      </p>

      <form
        className="formField d-flex flex-column  align-items-center"
        onSubmit={submit}
      >
        <input
          className="input"
          type="text"
          placeholder="Nome"
          onChange={(event) => getChange(event, "name")}
          value={formValues.name}
          required
        />

        <input
          className="input"
          type="tel"
          placeholder="Telefone"
          onChange={(event) => getChange(event, "telefone")}
          value={formValues.telefone}
          required
        />

        <input
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(event) => getChange(event, "email")}
          value={formValues.email}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="Assunto"
          onChange={(event) => getChange(event, "assunto")}
          value={formValues.assunto}
          required
        />

        <textarea
          className="textarea"
          placeholder="Como podemos ajudar?"
          onChange={(event) => getChange(event, "message")}
          value={formValues.message}
          required
        />

        <button className="button" type="submit" >
          Enviar
        </button>
      </form>
      {status.type === "success" ? (
        <p className="text-success">{status.mensagem}</p>
      ) : (
        ""
      )}
      {status.type === "error" ? (
        <p className="text-danger">{status.mensagem}</p>
      ) : (
        ""
      )}
    </div>
  );
}
