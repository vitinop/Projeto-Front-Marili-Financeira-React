import React, { useState, useEffect } from "react";
import { BsChatLeft } from "react-icons/bs";
import "./Formulario.css";


function useFormik({
  initialValues,
  validate
}) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    console.log('Alguém mexeu nos values', values);
    validateValues(values);
  }, [values]);

  function handleChange(e) {
    const fieldName = e.target.getAttribute('name');
    const { value } = e.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(e) {
    const fieldName = e.target.getAttribute('name');
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    })
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

export default function Formulario() {

  const formik = useFormik({
    initialValues: {
      userName: "",
      userTelefone: "",
      userEmail: "",
      userAssunto: "",
      userTextArea: "",
    },
    validate: function (values) {
      const errors = {};

      if (!values.userName.includes('[A-Z][a-z]')) {
        errors.userName = 'Please, insert a valid Name';
      }

      if (!values.userEmail.includes('/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i')) {
        errors.userEmail = 'Please, insert a valid email';
      }

      if (!values.userTelefone.includes('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im')) {
        errors.userTelefone = 'Please, insert a valid telefone'
      }

      return errors;
    }
  });


  // const valoresIniciais = {
  //   name: "",
  //   telefone: "",
  //   email: "",
  //   assunto: "",
  //   message: ""
  // };




  // const [formValues, setFormValues] = useState(valoresIniciais);

  // const [status, setStatus] = useState({
  //   type: '',
  //   mensagem: ''
  // });

  // const getChange = (event, key) => {
  //   const { value } = event.currentTarget;
  //   setFormValues({ ...formValues, [key]: value });
  // };

  const submit = (e) => {
    e.preventDefault();

    console.log(formik.values);

    
    // if (!validate()) return;

    // if (validate()) {
    //   setStatus({
    //     type: "success",
    //     mensagemStatus: "Mensagem enviada com sucesso!"
    //   });
    //   setFormValues({
    //     name: "",
    //     telefone: "",
    //     email: "",
    //     assunto: "",
    //     message: ""
    //   });
    // } else {
    //   setStatus({
    //     type: "error",
    //     mensagemStatus: "Preencha todos campos corretamente!"
    //   });
    // }

    // console.log("new", formValues);


  };





  // function validate() {
  //   if (!formValues.name)
  //     return setStatus({
  //       type: "error",
  //       mensagemStatus: "Erro: Necessário preencher o campo nome!"
  //     });
  //   if (!formValues.telefone)
  //     return setStatus({
  //       type: "error",
  //       mensagemStatus: "Erro: Necessário preencher o telefone!"
  //     });
  //   if (!formValues.email)
  //     return setStatus({
  //       type: "error",
  //       mensagemStatus: "Erro: Necessário preencher de email!"
  //     });
  //   if (!formValues.assunto)
  //     return setStatus({
  //       type: "error",
  //       mensagemStatus: "Erro: Necessário preencher o campo assunto!"
  //     });
  //   if (!formValues.message)
  //     return setStatus({
  //       type: "error",
  //       mensagemStatus: "Erro: Necessário preencher o campo com sua mensagem!"
  //     });
  //   return true;
  // }

  return (
    <div className="form-container d-flex flex-column align-items-center justify-content-center text-center">
      <h3>Vamos Conversar?</h3>
      <BsChatLeft className="mb-4" size={40} />

      <p>
        Conta pra nós os teus objetivos e os teus desafios, e através de uma
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
          name="userName"
          id="userName"
          placeholder="Nome"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userName}

        />
        {formik.touched.userName && formik.errors.userName && <span className="error">{formik.errors.userName}</span>}



        <input
          className="input"
          type="tel"
          name="userTelefone"
          id="userTelefone"
          placeholder="Telefone"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userTelefone}

        />

        {formik.touched.userTelefone && formik.errors.userTelefone && <span className="error">{formik.errors.userTelefone}</span>}

        <input
          className="input"
          type="email"
          placeholder="email@example.com"
          name="userEmail"
          id="userEmail"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userEmail}
        />
        {formik.touched.userEmail && formik.errors.userEmail && <span className="error">{formik.errors.userEmail}</span>}

        <input
          className="input"
          type="text"
          placeholder="Assunto"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userAssunto}

        />


        <textarea
          className="textarea"
          placeholder="Como podemos ajudar?"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userTextArea}


        />

        <button className="button" type="submit" >
          Enviar
        </button>
      </form>
      {/* {status.type === "success" ? (
        <p className="text-success">{status.mensagem}</p>
      ) : (
        ""
      )}
      {status.type === "error" ? (
        <p className="text-danger">{status.mensagem}</p>
      ) : (
        ""
      )} */}
    </div>
  );
}

