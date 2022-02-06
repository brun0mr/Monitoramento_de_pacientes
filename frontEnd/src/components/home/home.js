import React from "react";
import { Button } from "reactstrap";
import "./home.css";

export default function Home() {
  return (
    <div className="home_container">
        <div className="home_text">
            <p>
                <h1>Bem vindo ao <strong>(Nome do site)</strong></h1>
                
                <h7>Para informações: </h7>
                <Button
                block
                color="primary"
                size="sm"
                onClick= ""
                href="/About"
                >
                About
                </Button>

                <h5></h5>

                <h7>Para lista de médicos: </h7>
                
                <Button
                block
                color="primary"
                size="sm"
                onClick=""
                href="/lista_medicos"
                >
                Médicos
                </Button>
                

                <h5></h5>

                <h7>Para lista de pacientes: </h7>
                <Button
                block
                color="primary"
                size="sm"
                onClick=""
                href="/medico/lista_pacientes"
                >
                Pacientes
                </Button>

                <h5></h5>

                <h7>Para lista de sensores: </h7>
                <Button
                block
                color="primary"
                size="sm"
                onClick=""
                href="/lista_sensores"
                >
                Sensores
                </Button>

                <h5></h5>

                <h7>Para ver relatórios: </h7>
                <Button
                block
                color="primary"
                size="sm"
                onClick=""
                href="/relatorios"
                >
                Relatórios
                </Button>

                <h5></h5>

                <h7>Para notificações: </h7>
                <Button
                block
                color="primary"
                size="sm"
                onClick=""
                href="/Alerts"
                >
                Notificações
                </Button>

                <h5></h5>

                <h7>Para se cadastrar: </h7>
                <Button
                block
                color="primary"
                size="sm"
                onClick=""
                href="/cadastrar"
                >
                Cadastrar
                </Button>

                <h5></h5>

                <h7>Para efetuar Login: </h7>
                <Button
                block
                color="primary"
                size="sm"
                onClick=""
                href="/login"
                >
                Entrar
                </Button>

                <h5></h5>

                <h7>Para contato dos desnvolvedores: </h7>
                <Button
                block
                color="primary"
                size="sm"
                onClick=""
                href="/Contact"
                >
                Contact
                </Button>
            </p> 
        </div>
    </div>
  );
}
