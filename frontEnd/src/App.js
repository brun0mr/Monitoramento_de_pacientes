import React, {useEffect} from "react";
import Home from './components/home/home';
import About from './components/About/About';
import Navbar__ from './components/Navbar/Navbar__';
import Login from './components/Login/Login';
import Lista_pacientes from './components/lista_pacientes/Lista_pacientes';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Recovery from "./components/Login/Recovery";
import Register from "./components/Register/Register";
import AuthProvider from "./context/auth-context";
import AuthContext, { useAuth } from "./context/auth-context";
import Cookies from 'js-cookie';
import Profile from "./components/Profile/Profile";
import Historico_paciente from "./components/lista_pacientes/Historico_paciente";
import Lista_medicos from "./components/Lista_medicos/Lista_medicos";
import Lista_sensores from "./components/Lista_sensores/Lista_sensores";
import Reports from "./components/Relatorios/Reports";
import Alerts from "./components/Alerts/Alerts";
import './styles.css';

import Teste1 from "./components/Teste/Teste1";
import Teste_fetch from "./components/Teste/Teste_fetch";
import Contact from "./components/Contact/Contact";

export default function App() {

  if(Cookies.get('username') == undefined){
    Cookies.set('username', 'Teste');
    Cookies.set('user_id', '');
    Cookies.set('isLoggedIn', false);
    Cookies.set('token', '');
  }

  return (
    <AuthProvider>
      <div className="body">
        <Router>
          <Routes>
            <Route path="/" element={[<Home />, <Navbar__ />]}></Route>
            <Route path="/about" element={[<About />, <Navbar__ />]}></Route>
            <Route path="/login" element={[<Login />, <Navbar__ />]}></Route>
            <Route
              path="/login/recuperar"
              element={[<Recovery />, <Navbar__ />]}
            ></Route>
            <Route
              path="/medico/lista_pacientes"
              element={[<Lista_pacientes />, <Navbar__ />]}
            ></Route>
            <Route
              path="/cadastrar"
              element={[<Register />, <Navbar__ />]}
            ></Route>
            <Route
              path="/paciente/dados"
              element={[
                <Profile id={localStorage.getItem("profile_id")} />,
                <Navbar__ />,
              ]}
            ></Route>
            <Route
              path="/paciente/historico"
              element={[
                <Historico_paciente id={localStorage.getItem("profile_id")} />,
                <Navbar__ />,
              ]}
            ></Route>
            <Route
              path="/lista_medicos"
              element={[
                <Lista_medicos />,
                <Navbar__ />,
              ]}
            ></Route>
            <Route
              path="/lista_sensores"
              element={[
                <Lista_sensores />,
                <Navbar__ />,
              ]}
            ></Route>
            <Route
              path="/relatorios"
              element={[
                <Reports />,
                <Navbar__ />,
              ]}
            ></Route>
            <Route path="/alerts" element={[<Alerts />, <Navbar__ />]}></Route>
            <Route path="/Contact" element={[<Contact />, <Navbar__ />]}></Route>
            <Route path="/teste1" element={[<Teste1 />]}></Route>
            <Route path="/teste" element={[<Teste_fetch />]}></Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );

      
}