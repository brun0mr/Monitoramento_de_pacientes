import React from "react";
import { Button } from "reactstrap";
import "./About.css";
//mport Arduino from 'https://circuitdigest.com/sites/default/files/projectimage_mic/IoT-based-Patient-Monitoring-System-using-ESP8266-and-Arduino.jpg'

export default function About() {
  return (
    <div className="about_container">
        <div className="about_text">
            <p>
                <h2><strong>Sobre o site</strong></h2>
                O <strong>(Nome do site)</strong> é um software projetado para
                o monitoramento remoto dos sinais biológicos de pacientes. Isso é feito
                atráves da plataforma Arduino, na qual é feita a captura da temperatura, pressão,
                oxigenação e frequência cardíaca através de sensores conectados diretamente nos pacientes.

                <h1></h1>
                <h1></h1>
                <h1></h1>

                <h2><strong>Funcionamento</strong></h2>
                O cadastro de um paciente é feito pelo médico, o qual deve possuir um cadastro. Os cadastros
                podem ser feitos na aba <a href="/cadastrar">Cadastrar</a>. Os sianis biológicos
                do paciente são medidos de 1 em 1 minuto e, com esses dados, são gerados relátorios que ficam disponíveis
                na aba <a href="/relatorios">Relatórios</a>, a qual lista os relátorios e indica a data e a hora da leitura e o médico
                que supervisiona o paciente. Os relatórios ficam disponíveis para <i>download</i> apenas para o médico responsável pelo
                paciente e para o próprio paciente. Caso o paciente apresenta algum sinal biológico fora do comum, um alerta é emitido na 
                aba <a href="/alerts">Notificações</a>. Caso você já seja cadastrado, basta ir na aba <a href="/login">Entrar</a> e 
                efetuar seu Login.

                <h1></h1>
                <h1></h1>
                <h1></h1>

                <h2><strong>Dúvidas</strong></h2>
                Para mais informações ou solucionamento de dúvidas você pode entrar em contato conosco atráves da aba <a href="/Contact">Contact</a>.
            </p>
        </div>
    </div>
  );
}
