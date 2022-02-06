import { Nav, NavItem, NavLink } from "reactstrap";
import { NavbarBrand, Button } from "reactstrap";
import React from "react";
import './Navbar__.css';
import SubMenu from "./SubMenu.js";
import { IoIosHome, IoIosNotifications, IoMdAt, IoIosLogIn, IoIosInformationCircleOutline, IoMdCheckmark, IoMdAttach } from "react-icons/io";
import AuthContext, { useAuth } from "../../context/auth-context";
import Cookies from "js-cookie";

export default function Navbar__(){
    const Disconnect = function(){
      Cookies.remove('username');
      Cookies.remove('user_id');
      Cookies.set('isLoggedIn', false);
      Cookies.remove('token');   
    }

    return (
      <div className="side_body">
        <Nav pills tabs vertical>
          <NavbarBrand href="/" className="Brand">
            <p className="Navbrand_p">Projeto 2</p>
          </NavbarBrand>
          <NavItem>
            <NavLink href="/">
              <p className="Navlink_p">
                {" "}
                <IoIosHome /> Home
              </p>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/about">
              <p className="Navlink_p">
                {" "}
                <IoIosInformationCircleOutline /> About
              </p>
            </NavLink>
          </NavItem>

          <SubMenu title="Listar" subs={submenus[0]}></SubMenu>

          <NavItem>
            <NavLink href="/relatorios">
              <p className="Navlink_p">
                <IoMdAttach /> Relatórios
              </p>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/alerts">
              <p className="Navlink_p">
                {" "}
                <IoIosNotifications /> Notificações
              </p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cadastrar">
              <p className="Navlink_p">
                {" "}
                <IoMdCheckmark /> Cadastrar
              </p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login/">
              <p className="Navlink_p">
                {" "}
                <IoIosLogIn /> Entrar
              </p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Contact">
              <p className="Navlink_p">
                {" "}
                <IoMdAt /> Contact
              </p>
            </NavLink>
          </NavItem>
        </Nav>
        <div className="User">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            className="User_img"
          ></img>
          {Cookies.get("username") == ""
            ? "Convidado"
            : Cookies.get("username")}

          {Cookies.get("username") != "" && (
            <>
              <br/>
              <Button className="Button-nav-bottom" color="secondary" href="/paciente/dados">
                Perfil
              </Button>
              <Button className="Button-nav-bottom" color="danger" href="/" onClick={Disconnect}>
                Desconectar
              </Button>
            </>
          )}
        </div>
      </div>
    );
}

const submenus = [
  [
    ["Médicos", "/lista_medicos"],
    ["Pacientes", "/medico/lista_pacientes"],
    ["Sensores", "/lista_sensores"],
  ],
];
