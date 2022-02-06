import React, { useState } from "react";
import { Button } from "reactstrap";
import './Login.css';

export default function Recovery(){
    const [email, set_email] = useState('');
    const [show_message, set_show_message] = useState(false);

    const onSubmit = () => {
        return fetch('http://127.0.0.1:8000/api/recovery/', {
            method: "POST",
            body: JSON.stringify({email: email})
        });
      }

    var forgot_jsx = (
        <form>
          <label for="email">Digite seu email: </label>
          <br />
          <input type="email" id="email" onChange={(x) => set_email(x.target.value)}></input>
          <br />
          <br />
          <Button block color="success" outline size="lg" type="submit" onClick={() => set_show_message(!show_message)}>
            Recuperar
          </Button>
        </form>
      );

      var message_jsx = (
        <div className="message_content">Email enviado para: {email}</div>
      );

      return (
        <div className="Login_container">
          <div className="Login">
            <div className="Login_content">{show_message == false && forgot_jsx}</div>
            <div className="Login_content">{show_message == true && message_jsx}</div>
          </div>
        </div>
      );
}