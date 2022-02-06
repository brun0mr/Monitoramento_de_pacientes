import React, { useState } from "react";
import { Collapse, NavItem, NavLink, Card, CardBody } from "reactstrap";
import './Navbar__.css';
import { IoIosList } from "react-icons/io";

export default function SubMenu({ title, setOp, subs }) {
  const [isOpen, setIsOpen] = useState(false);

  let items = subs.map((x) => {
    return (
      <NavItem>
        <NavLink href={x[1]}>
          {x[0]}
        </NavLink>
      </NavItem>
    );
  });


  return (
    <div>
      <NavLink href="#" onClick={() => setIsOpen(!isOpen)}>
        <p className="Navlink_p"> <IoIosList/> {title}</p>
      </NavLink>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>{items}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
};