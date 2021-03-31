import React from "react";
import "./Frame1567.css";
import { hideSaldoAluguel } from "../../../js/jsaluguel";

function Group1566() {
  return (
    <div className="Group1567">
      <div className="Group1558-aluguel">
        <h3>A</h3>
      </div>

      <div className="Group1558-2">
        <p>Aluguel</p>
        <button onClick={hideSaldoAluguel}>
          <i class="far fa-eye-slash"></i>
        </button>
        <p className="Values" id="alu">
          R$1.600,00
        </p>
      </div>
    </div>
  );
}

export default Group1566;
