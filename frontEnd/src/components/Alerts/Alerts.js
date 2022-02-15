import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Button, Row, Col } from 'reactstrap';
import './Alerts.css';

export default function Alerts(){
    const [loaded_data, set_loaded_data] = useState([]); // lista de medicos e suas informações são carregadas do servidor e guardadas aq 
    const [data, set_data] = useState(''); 

    // requisitar ao servidor lista dos medicos e suas informações
    const load_data = async function () {
      const response = await fetch("http://127.0.0.1:8000/api/lista_notificacoes/");
      const data_a = await response.json();
      let data = [];
      for(let i in data_a){
        console.log(data_a[i]);
        let x = JSON.parse("[" + data_a[i] + "]")[0];
        let add = [x[0], x[1]];
        data.push(add);        
      }
      set_loaded_data(data);

      let linhas_lista = data.map((x) => (
        <div className="grid-container-alerts">
          <div className="item">{x[1]}</div>
          <div className="item">{x[2]}</div>
        </div>
      ));

      set_data(linhas_lista);
    };


    useEffect(() => {
      load_data();
    }, []);


    
  
  return (
    <>
      <div className="page-alerts">
      <h1>Alerts</h1>
        <div className="patient_row-alerts">{data}</div>
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
  