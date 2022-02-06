import React, {useState} from "react";
import './Historico_paciente.css';
import Cookies from 'js-cookie';
import { Button } from 'reactstrap';

export default function Historico_paciente({id}){

    const [loaded_data, set_loaded_data] = useState({data: ''}); // todo os dados vitais historicos do pacientes são carregados do servidor e guardados aqui 

    // para parar de monitorar o paciente, enviar dados para remoção do paciente
    const remove_patient = () => {
        const response = fetch('http://127.0.0.1:8000/api/paciente/historico', {
            method: "POST",
            body: JSON.stringify({id: id, token: Cookies.get('token')})
        });
        const data_b = response.json();
    }

    // requisitar o historico dos dados para o servidor
    const load_data = async() => {
        const response = fetch('http://127.0.0.1:8000/api/paciente/historico', {
            method: "POST",
            body: JSON.stringify({id: id, token: Cookies.get('token')})
        });
        const data_a = response.json();
        set_loaded_data({data: data_a});
    }

    // se a pagina ficar aberta, periodicamente devemos atualizar a pagina, pois o sensor tambem faz leituras periodicas
    const update_content = () => {
        setInterval(()=>{
            load_data();
        }, 1000);
    }

    // useEffect(() => {
    //   update_content();
    // }, []);

    // do historico de dados vitais, organizar para exibição
    let linhas_lista = dados.map((x) => (
        <div className="grid-container-hist">
          <div className="item1">{x[0]}</div>
          {
            x[1] == 'Nome' &&
            <div className="item2">
              {x[1]}
            </div>
          }
          
          {
            x[1] != 'Nome' &&
            <div className="item2">
              <div>{x[1]}</div>
            </div>
          }
          
          <div className="item3">{x[2]}</div>
          <div className="item4">{x[3]}</div>
          <div className="item5">{x[4]}</div>
          <div className="item6">{x[5]}</div>
        </div>
      ));

      let nome = ' -- replace -- ';
      
      return (
        <div className="page-hist">
          <h1 className="page_header-hist">Paciente {nome}</h1>
          <div className="op_lista-hist">
            <Button
              color="danger"
              size="lg"
              onClick={remove_patient}
              href="/medico/lista_pacientes"
            >
              Remover
            </Button>
            <Button color="dark" size="lg">
              Gerar relatório
            </Button>
          </div>
          <div className="patient_row-hist">{linhas_lista}</div>
        </div>
      );
}

var dados = [
    ['data', 'hora', 'ºC', 'BPM', 'SaO2', 'mmHg'],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],
    ['01/01/2022', '12:12:12', 84, 120, 123, 456],

];
