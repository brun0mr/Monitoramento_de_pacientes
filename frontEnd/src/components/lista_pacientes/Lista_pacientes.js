import './Lista_pacientes.css';
import React, { useEffect, useState } from "react";
import { Button } from 'reactstrap';
import AuthContext, { useAuth } from "../../context/auth-context";
import Cookies from 'js-cookie';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

export default function Lista_pacientes(){

  const [loaded_data, set_loaded_data] = useState({data: ''}); // lista de pacientes quando carregado do backend será guardado aqui
  const [show_add_window, set_show_add_window] = useState(false); // estado verdadeiro ou falso para mostrar a janela de adicionar pacientes
  const [_p_n_attached_list, set_p_n_attached_list] = useState(); // pacientes que não estão sendo monitorados
  const [_s_n_attached_list, set_s_n_attached_list] = useState(); // sensores que não estão sendo monitorados
  let S_attach_p; // sensor escolhido
  let P_attach_s; // paciente escolhido

  // carrega lista de pacientes e sensores não usados
  const load_n_attached_list = async () => {
    const response1 = await fetch("http://127.0.0.1:8000/api/p_n_attached/");
    const response2 = await fetch("http://127.0.0.1:8000/api/s_n_attached/");
    const data_a = await response1.json();
    const data_b = await response2.json();
    set_p_n_attached_list(data_a);
    set_s_n_attached_list(data_b);
  };
  // attach, enviar sensor e paciente escolhido para o backend
  const load_n_attached = async () => {
    const response1 = await fetch("http://127.0.0.1:8000/api/home_view/", {
      method: "POST",
      body: JSON.stringify({token: Cookies.get('token'), patient: P_attach_s, sensor: S_attach_p}),
  });
    const data_a = await response1.json();
  };
  // carrega lista
  const load_data = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/json_response/");
    const data_a = await response.json();
    set_loaded_data({data: data_a});
  };
  // dados do carregar lista devem ser periodicamente recarregados
  const update_content = () => {
    setInterval(()=>{
      load_data();
    }, 1000);
  }

  // useEffect(() => {
  //   update_content();
  // }, []);

  
  let patient_opt = p_n_attached_list.map((x) => (
    <option value={x}>{x}</option>
  ));
  let sensor_opt = s_n_attached_list.map((x) => (
    <option value={x}>{x}</option>
  ));

// dos dados da lista, organizar o jsx
let linhas_lista = dados.map((x) => (
  <div className="grid-container">
    <div className="item1">{x[0]}</div>
    {
      x[1] == 'Nome' &&
      <div className="item2">
        {x[1]}
      </div>
    }
    
    {
      // se for linha do paciente, o nome deve ser clicável para direcionar ao historico daquele paciente
      x[1] != 'Nome' &&
      <div className="item2">
        <a href='/paciente/historico' onClick={() => {localStorage.setItem('profile_id', x[0])}}>{x[1]}</a>
      </div>
    }
    
    
    {/* outros dados como temperatura, pressão, oxigenação e cardiaco */}
    <div className="item3">{x[2]}</div>
    <div className="item4">{x[3]}</div>
    <div className="item5">{x[4]}</div>
    <div className="item6">{x[5]}</div>
  </div>
));

return (
  <div className="page">
    <h1>Lista de pacientes</h1>
    <div className="op_lista">
      {/* botão de adicionar pacientes */}
      <Button
        color="success"
        size="lg"
        onClick={() => {
          set_show_add_window(true);
          // load_n_attached_list;
        }}
      >
        Adicionar
      </Button>
      {/* botão de atualizar lsita */}
      <div>
        <Button color="light" size="lg" onClick={load_data}>
          Atualizar
        </Button>
      </div>
    </div>

    {/* Mostrar pacientes e suas informações vitais */}
    <div className="patient_row">{linhas_lista}</div>
    {/* Se for o caso de adiconar pacientes no monitor */}
    {show_add_window == true && (
      <>
        <div
          className="background_add_form"
          onClick={() => set_show_add_window(!show_add_window)}
        ></div>
        <div className="add_form">
          <form>
            <div>
              <label for="item_form1">Paciente:</label>
              <select name="item_form1" onChange={(e) => { P_attach_s = e.target.value }}>{(patient_opt.unshift(<option value=''>Selecionar</option>)) && patient_opt}</select>
            </div>
            <div>
              <label for="item_form2">ID do sensor:</label>
              <select name="item_form2" onChange={(e) => { S_attach_p = e.target.value }}>{(sensor_opt.unshift(<option value=''>Selecionar</option>)) && sensor_opt}</select>
            </div>
            <div className="Button_submit">
              <Button
                className="Button_submit"
                color="primary"
                size="sm"
                href="/medico/lista_pacientes"
                onClick={load_n_attached}
              >
                Adicionar
              </Button>
            </div>
          </form>
        </div>
      </>
    )}
  </div>
);
}

var dados = [
    ['id', 'Nome', 'ºC', 'BPM', 'SaO2', 'mmHg'],
    [0, 'pericles', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
    [1, 'izumi', 84, 120, 123, 456],
];

var p_n_attached_list = [
  '1- pericles', '2- izumi', '3- yoshigae', '4- moritani'
];

var s_n_attached_list = [
  1,2,3,4,5
];
