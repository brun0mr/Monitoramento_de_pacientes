import React from "react";
import { Button } from "reactstrap";
import "./Alerts.css";

export default function Alerts() {
    return (
      <div className="alerts_container">
        <div className="alerts_text">
          <p>
            <h1>
              <strong>Notificações</strong>
            </h1>
            <div className="alerts_background">
              <div className="alerts_row">{data}</div>
            </div>
          </p>
        </div>
      </div>
    );
  }

  var data = ['pericles', 'izumi'];