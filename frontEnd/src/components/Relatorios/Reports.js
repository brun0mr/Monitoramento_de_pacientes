import React from "react";
import './Reports.css';

export default function Reports(){
    let linhas_lista = dados.map((x) => (
      <div className="grid-container-reports">
        <div className="item1">{x[0]}</div>
        <div className="item2">{x[1]}</div>
        <div className="item3">{x[2]}</div>
        {x[0] == "Data" && <div className="item2">{x[3]}</div>}

        {x[0] != "Data" && (
          <div className="item2">
            <a href={x[3]}>
              <img
                className="download-report"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ho9v4mOvANNfJtne-kW1J_PaNMgit1eQYl7j1uxdJBjKvdVQSGmlt_3fgbWIHWbwiCc&usqp=CAU"
              ></img>
            </a>
          </div>
        )}
      </div>
    ));

    return (
      <div className="Reports_body">
        <h2>Relatórios</h2>
        <div className="report-list">
          <div>{linhas_lista}</div>
        </div>
      </div>
    );
}

var dados = [
    ['Data', 'Hora', 'Médico', 'Download'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
    ['01/01/2022', '12:12:12', 'Dr. 1', '/'],
];
