import React, { useState } from "react";
import './Lista_sensores.css';
import { Button, Row, Col } from 'reactstrap';
import { isDisabled } from "@testing-library/user-event/dist/utils";
import Cookies from 'js-cookie';

export default function Lista_sensores() {
  const [loaded_data, set_loaded_data] = useState({ data: "" }); // dados que são carregados do backend, lista de pessoas, pacientes e sensores são guardados aqui
  const [show_change_sensor, set_show_change_sensor] = useState(false); // um botão para tupla (paciente, medico, sensor), mostrar ou não a janela para trocar de sensor do paciente
  const [med_change_sensor, set_med_change_sensor] = useState(-1); // ao clicar no botao para mudar o sensor, fica registrado o id do médico e paciente envolvidos
  const [patient_change_sensor, set_patient_change_sensor] = useState(-1);
  let new_sensor = -1; // id do novo sensor
  
  const [show_add_sensor, set_show_add_sensor] = useState(false); // mostrar a janela de adicionar um sensor
  const [add_sensor_id, set_add_sensor_id] = useState(''); // id do novo sensor
  const [add_sensor_port, set_add_sensor_port] = useState(''); // porta que o novo sensor vai se conectar

  //carrega a tupla do backend
  const load_data = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/json_response/");
    const data_a = await response.json();
    set_loaded_data({ data: data_a });
  };

  //enviar a escolha do novo sensor
  const update_sensor = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/home_view/", {
        method: "POST",
        body: JSON.stringify({token: Cookies.get('token'), new_sensor: new_sensor, doctor: med_change_sensor, patient: patient_change_sensor})
    });
    const data_a = await response.json();
  };

  //enviar dados do novo sensor
  const add_sensor = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/home_view/", {
        method: "POST",
        body: JSON.stringify({token: Cookies.get('token'), new_sensor_id: add_sensor_id, new_sensor_port: add_sensor_port})
    });
    const data_a = await response.json();
  };

  //informações da tupla são carregadas em linhas para serem exibidas
  let linhas_lista = dados.map((x) => (
    <div className="grid-container-l_sensores">
      <div className="item">{x[0]}</div>
      <div className="item">{x[1]}</div>
      <div className="item">{x[2]}</div>

      <div className="item">{x[3]}</div>
      <div className="item">{x[4]}</div>

      <div className="button">
        {x[0] != "ID médico" && (
          <Button
            color="warning"
            size="sm"
            disabled={show_change_sensor}
            onClick={() => {
              set_show_change_sensor(true);
              set_med_change_sensor(x[0])
              set_patient_change_sensor(x[2])
            }}
          >
            ✗
          </Button>
        )}
        {x[0] == "ID médico" && "Trocar sensor"}
      </div>
    </div>
  ));

  //mostrar opções de sensores disponíveis
  let sensor_form = sensor.map((x) => (
    <option value={x}>{x}</option>
  ));

  // aqui é a janela para mudar de sensor
  let change_sensor_jsx = (
    <>
      <div
        className="background_window"
        onClick={() => set_show_change_sensor(!show_change_sensor)}
      ></div>
      <div className="window_body">
        <form>
          <label for="sensor_form">Novo ID do sensor:</label>
          <select
            name="sensor_form"
            onChange={(e) => {
              new_sensor = e.target.value;
            }}
          >
            {sensor_form.unshift(<option value="">Selecionar</option>) &&
              sensor_form}
          </select>
          <Button
            className="Button_submit"
            color="warning"
            size="sm"
            href="/lista_sensores"
            onClick={update_sensor}
          >
            Escolher
          </Button>
        </form>
      </div>
    </>
  );

  // janela para adicionar um sensor
  let add_sensor_jsx = (
    <>
      <div
        className="background_window"
        onClick={() => set_show_add_sensor(false)}
      ></div>
      <div className="window_body_add_form">
        <form>
          <div className="div1">
            <label for="sensor_id">ID do sensor:</label>
            <input id="sensor_id" type="text" onChange={(e) => set_add_sensor_id(e.target.value)}></input>
            <br />
          </div>
          <div className="div1">
            <label for="porta">Porta do sensor:</label>
            <input id="porta" type="text" onChange={(e) => set_add_sensor_port(e.target.value)}></input>
            <br />
          </div>

          <div className="div2">
            <Button
              className="Button_submit"
              color="warning"
              size="sm"
              href="/lista_sensores"
              onClick={add_sensor}
            >
              Adicionar
            </Button>
          </div>
        </form>
      </div>
    </>
  );

  return (
    <div className="page-l_sensores">
      <h1>Lista de sensores</h1>

      <div className="op_lista-l_sensores">
        {/* botão de adicionar pacientes */}
        <Button
          color="success"
          size="lg"
          onClick={() => {
            set_show_add_sensor(true);
            // load_n_attached_list;
          }}
        >
          Adicionar
        </Button>
      </div>

      <div className="patient_row-l_sensores">{linhas_lista}</div>
      {/* mostrar a janela de trocar o sensor */}
      {show_change_sensor == true && change_sensor_jsx}
      {/* mostrar a janela de adicionar o sensor */}
      {show_add_sensor == true && add_sensor_jsx}

    </div>
  );
}

//ids teste do sensores
var sensor = [
    1,2,3,4,9999
];

//dados de teste
//quando essa matriz for excluida, trocar o nome para 'loaded_data'
var dados = [
  ["ID médico", "Nome médico", "ID paciente", "Nome paciente", "ID sensor"],
  [122, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [123, "Dr. pericles", 456, "pericles", 789],
  [124, "Dr. pericles", 456, "pericles", 789],
];
  