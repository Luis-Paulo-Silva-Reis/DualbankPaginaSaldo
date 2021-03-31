import React from "react";
import "./Frame1567.css";
import { hideideSaldoAlimentacao } from "../../../js/jsalimentacao";

function Group1566() {
  return (
    <div className="Group1568">
      <div className="Group1558-alimentacao">
        <h3>A</h3>
      </div>

      <div className="Group1558-3">
        <p>Alimentação</p>
        <button onClick={hideideSaldoAlimentacao}>
          <i class="far fa-eye-slash"></i>
        </button>
        <p className="Values" id="ali">
          R$450,00
        </p>
      </div>
    </div>
  );
}

export default Group1566;
