import React, { useState } from "react";
import { Button } from "reactstrap";
import './Profile.css';
import Cookies from 'js-cookie';    

// esse componente serve para atualizar os dados cadastrais do usuario
export default function Profile({id}){
    const response = fetch('http://127.0.0.1:8000/api/profile/', {
        method: "POST",
        body: JSON.stringify({id: id, token: Cookies.get('token')})
    });
    // const data = response.json();

    // let name = '';
    // let email = '';
    // let telephone = '';
    // let comorbidades = '';

    // try{
    //     name = data.name;
    // }
    // catch{}
    // try{
    //     email = data.email;
    // }
    // catch{}
    // try{
    //     telephone = data.telephone;
    // }
    // catch{}
    // try{
    //     comorbidades = data.comorbidades;
    // }
    // catch{}

    const onSubmit = () => {
        console.log('');
    }

    return (
      <div className="page-prof">
        <div className="body-profile">
          <div className="col-left-prof">
            <img
              className="img_profile"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            />
          </div>
          <div className="col-right-prof">
            <form>
              <label for="name">Nome:</label>
              <br />
              <input type="text" id="name" value={{/*name*/}}></input>
              <br />

              <label for="pass">Senha:</label>
              <br />
              <input type="password" id="pass"></input>
              <br />

              <label for="pass_conf">Confirme sua senha:</label>
              <br />
              <input type="password" id="pass_conf"></input>
              <br />

              <label for="email" value={{/*email*/}}>Email:</label>
              <br />
              <input type="email" id="email"></input>
              <br />

              <label for="telephone" value={{/*telephone*/}}>Telefone:</label>
              <br />
              <input
                type="tel"
                id="telephone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
              <br />

              <label for="email">Email:</label>
              <br />
              <input type="email" id="email"></input>
              <br />

              <label for="comorbidity" value={{/*comorbidades*/}}>Comorbidades:</label>
              <br />
              <textarea id="comorbidity" rows="4" cols="24"></textarea>
              <br />

              <label for="image">Foto do perfil:</label>
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
                Atualizar
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
}