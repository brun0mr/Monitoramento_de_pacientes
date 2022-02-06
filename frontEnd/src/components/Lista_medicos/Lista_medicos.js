import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import { Button, Row, Col } from 'reactstrap';
import './Lista_medicos.css';

export default function Lista_medicos(){
    const [loaded_data, set_loaded_data] = useState({data: ''}); // lista de medicos e suas informações são carregadas do servidor e guardadas aq 

    // requisitar ao servidor lista dos medicos e suas informações
    const load_data = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/json_response/");
      const data_a = await response.json();
      set_loaded_data({data: data_a});
    };
    
  let linhas_lista = dados.map((x) => (
    <div className="grid-container-l_medicos">
      <div className="item">
        <img
          className="img_profile"
          src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
        />
      </div>
      <div className="item">{x[1]}</div>
      <div className="item">{x[2]}</div>

      <div className="item">{x[3]}</div>
      <div className="button_l">
        <Button color="primary" size="sm">
          Info
        </Button>
        <Button color="danger" size="sm">
          Remov
        </Button>
        <Button color="success" size="sm">
          Pacientes
        </Button>
      </div>
    </div>
  ));
  
  return (
    <>
      <div className="page-l_medicos">
      <h1>Lista de médicos</h1>
        <div className="patient_row-l_medicos">{linhas_lista}</div>
      </div>
    </>
  );
  }
  
  var dados = [
      [123, 'Dr. pericles', 'pericles@gmail.com', '+55 12 99999-1111'],
      [123, 'Dr. pericles', 'pericles@gmail.com', '+55 12 99999-1111'],
      [123, 'Dr. pericles', 'pericles@gmail.com', '+55 12 99999-1111'],
      [123, 'Dr. pericles', 'pericles@gmail.com', '+55 12 99999-1111'],
      [123, 'Dr. pericles', 'pericles@gmail.com', '+55 12 99999-1111'],
      [123, 'Dr. pericles', 'pericles@gmail.com', '+55 12 99999-1111'],
      [123, 'Dr. pericles', 'pericles@gmail.com', '+55 12 99999-1111'],
      [123, 'Dr. pericles', 'pericles@gmail.com', '+55 12 99999-1111'],

  ];
  