import React from "react";
import "./Frame1567.css";
import { hideSaldoPricipal } from "../../../js/jspricipal";

function Group1566() {
  return (
    <div className="Group1566">
      <div className="Frame1884">
        <h3>P</h3>
      </div>

      <div className="Group1558">
        <p>Principal</p>
        <button onClick={hideSaldoPricipal}>
          <i class="far fa-eye-slash"></i>
        </button>
        <p className="Values" id="pri">
          R$10.000,00
        </p>
      </div>
    </div>
  );
}

export default Group1566;
