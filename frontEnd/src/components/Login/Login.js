import React, { useState } from "react";
import { Button } from "reactstrap";
import './Login.css';
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "../../context/auth-context";
import Cookies from 'js-cookie';

export default function Login(){
    const [pass, setPass] = useState(''); // senha
    const [user, setUser] = useState(""); // usuario
    const [auth, setAuth] = useAuth();
    const [submissionAns, setSubmissionAns] = useState(''); // retorno do servidor sobre a tentativa de login
    let navigate = useNavigate();

    // na submissão, usuario e senha são enviados para o servidor e a resposta é salva no navegador como cookie, token, usuario e se esta logado
    const onSubmit = async function () {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
          method: "POST",
          body: JSON.stringify({username: user, password: pass})
      });

      const data = await response.json();
      console.log(data);
      if(data.status == 'failed'){
        setSubmissionAns('failed');
      }
      else{
        console.log('sucesso');
        setSubmissionAns('success');
        Cookies.set('username', user);
        Cookies.set('isLoggedIn', '1');
        Cookies.set('medico', data.medico);
        Cookies.set('token', data.token);
        navigate('/'); 
      }
      
    }

    // cada letra digitada do usuario vai ser guardada no usestate
    const onChangeUser = (e) => {
      setUser(e.target.value);
    }
    
    // cada letra digitada da senha vai ser guardada no usestate
    const onChangePass = (e) => {
      setPass(e.target.value);
    }

    // da um clear na mensagem no status do login
    (submissionAns == 'failed' || submissionAns == 'success') && setTimeout(() => {
      setSubmissionAns('a')
    }, 5000)

    // jsx do formulario de login
    let login_form_jsx = (
      <form>
        {/* <input type="radio" id="medico" name="fav_language" value="medico" />
        <label for="medico">Médico</label>
        <br />
        <input
          type="radio"
          id="paciente"
          name="fav_language"
          value="paciente"
        />
        <label for="paciente">Paciente</label>
        <br /> */}
        <label for="user">Username: </label>
        <br />
        <input type="text" id="user" onChange={onChangeUser}></input>
        <br />
        <br />

        <label for="pass">Password:</label>
        <br />
        <input type="password" id="pass" onChange={onChangePass}></input>
        <p>
          Esqueceu a senha? <a href="/login/recuperar">Clique aqui!</a>
        </p>
        <br />
        <Button
          block
          color="success"
          outline
          size="lg"
          onClick={onSubmit}
          href=""
        >
          Entrar
        </Button>
        {submissionAns == "failed" && (
          <div className="message_content">Usuário ou senha incorretos.</div>
        )}
        {submissionAns == "success" && (
          <div className="message_content">Conectado</div>
        )}
      </form>
    );

    return (
      <div className="Login_container">
        <div className="Login">
          <div className="Login_content">{login_form_jsx}</div>
        </div>
      </div>
    );
}

