import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./Register.css";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Register() {
  const [submissionAns, setSubmissionAns] = useState(""); // retorno do servidor sobre a tentativa de cadastro

  const [med_paci, set_med_paci] = useState('');
  const [nome, set_nome] = useState('');
  const [username, set_username] = useState('');
  const [cpf, set_cpf] = useState('');
  const [senha, set_senha] = useState('');
  const [conf_senha, set_conf_senha] = useState('');
  const [sexo, set_sexo] = useState('');
  const [idade, set_idade] = useState('');
  const [telefone, set_telefone] = useState('');
  const [email, set_email] = useState('');
  const [comorbidades, set_comorbidades] = useState('');
  const [nome_parente, set_nome_parente] = useState('');
  const [tel_parente, set_tel_parente] = useState('');
  const [email_parente, set_email_parente] = useState('');
  const [cep, set_cep] = useState('');
  const [endereco, set_endereco] = useState('');
  const [especialidade, set_especialidade] = useState('');

  let navigate = useNavigate();

  // useEffect(() => {
  //   console.log(med_paci);
  // }, [med_paci]);


  const onSubmit = async function () {
    const response = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      body: JSON.stringify({token: Cookies.get('token'),type: med_paci, name: nome, username:username, cpf: cpf,
        password: senha, conf_password: conf_senha, sexo: sexo, idade:idade,
          telefone: telefone, email: email, comorbidades: comorbidades, nome_parente,
            tel_parente: tel_parente, email_parente: email_parente, cep: cep, endereco: endereco,
              especialidade: especialidade}),
    });

    const data = await response.json();
    if(data.status == 'ok'){ navigate('/'); }
    
    // setSubmissionAns('failed');
    // const data = response.json();
    // if(data.submissionAns == 'true'){
    // setSubmissionAns(data.submissionAns);
    // Cookies.set('username', data.username);
    // Cookies.set('isLoggedIn', data.isLoggedIn);
    // Cookies.set('token', data.token);
    // }
  };
  // onChange={() => {(e.target.value)}
  const jsx_patient = (
    <>
      <label for="name_emer">Nome de um parente:</label>
      <br />
      <input type="text" id="name_emer" onChange={(e) => {set_nome_parente(e.target.value)}}></input>
      <br />

      <label for="telephone_emer">Telefone de um parente:</label>
      <br />
      <input
        type="tel"
        id="telephone_emer"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        onChange={(e) => {set_tel_parente(e.target.value)}}
      />
      <br />

      <label for="email_emer">Email de um parente:</label>
      <br />
      <input type="email" id="email_emer" onChange={(e) => {set_email_parente(e.target.value)}}></input>
      <br />

      <label for="comorbidity">Nos conte sobre suas comorbidades:</label>
      <br />
      <textarea id="comorbidity" rows="4" cols="24" onChange={(e) => {set_comorbidades(e.target.value)}}></textarea>
      <br />
    </>
  );

  const jsx_doc = (
    <>
      <label for="especialidade">Especialidade:</label>
      <br />
      <input type="text" id="especialidade" onChange={(e) => {set_especialidade(e.target.value)}}></input>
      <br />
    </>
  );

  const jsx_form = (
    <>
      <form>
        <input
          type="radio"
          id="medico"
          name="fav_language"
          value="medico"
          onChange={(e) => set_med_paci("medico")}
        />
        <label for="medico">M??dico</label>
        <br />
        <input
          type="radio"
          id="paciente"
          name="fav_language"
          onChange={(e) => set_med_paci("paciente")}
        />
        <label for="paciente">Paciente</label>
        <br />

        <label for="name">Nome:</label>
        <br />
        <input
          type="text"
          id="name"
          onChange={(e) => {
            set_nome(e.target.value);
          }}
        ></input>
        <br />
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          onChange={(e) => {
            set_username(e.target.value);
          }}
        ></input>
        <br />

        <input
          type="radio"
          id="masculino"
          name="sexo"
          onChange={(e) => set_sexo("m")}
        />
        <label for="masculino">Masculino</label>
        <br />
        <input
          type="radio"
          id="feminino"
          name="sexo"
          onChange={(e) => set_sexo("f")}
        />
        <label for="feminino">Feminino</label>
        <br />

        <label for="idade">Idade:</label>
        <input
          type="text"
          id="idade"
          onChange={(e) => {
            set_idade(e.target.value);
          }}
        ></input>
        <br />

        <label for="cpf">CPF:</label>
        <br />
        <input
          type="text"
          id="cpf"
          onChange={(e) => {
            set_cpf(e.target.value);
          }}
        ></input>
        <br />

        <label for="pass">Senha:</label>
        <br />
        <input
          type="password"
          id="pass"
          onChange={(e) => {
            set_senha(e.target.value);
          }}
        ></input>
        <br />

        <label for="pass_conf">Confirme sua senha:</label>
        <br />
        <input
          type="password"
          id="pass_conf"
          onChange={(e) => {
            set_conf_senha(e.target.value);
          }}
        ></input>
        <br />

        <label for="telephone">Telefone pessoal:</label>
        <br />
        <input
          type="tel"
          id="telephone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          onChange={(e) => {
            set_telefone(e.target.value);
          }}
        />
        <br />

        <label for="email">Email pessoal:</label>
        <br />
        <input
          type="email"
          id="email"
          onChange={(e) => {
            set_email(e.target.value);
          }}
        ></input>
        <br />

        <label for="cep">CEP:</label>
        <br />
        <input
          type="text"
          id="cep"
          onChange={(e) => {
            set_cep(e.target.value);
          }}
        />
        <br />

        <label for="address">Endere??o:</label>
        <br />
        <input
          type="text"
          id="address"
          onChange={(e) => {
            set_endereco(e.target.value);
          }}
        ></input>
        <br />

        {med_paci == "paciente" && jsx_patient}
        {med_paci == "medico" && jsx_doc}

        <label for="image">Foto de perfil:</label>
        <br />
        <input type="file" id="image"></input>
        <br />
        <br />

        <Button
          block
          color="success"
          outline
          size="lg"
          onClick={onSubmit}
          href=""
        >
          Registrar
        </Button>
      </form>
    </>
  );

  return (
    <div className="Register_container">
      <div className="Register">{jsx_form}</div>
    </div>
  );
}
