import React from "react";
import "./Frame1874.css";
import { hideSaldo } from "../../js/jssaldo";

function Frame1874() {
  return (
    <div className="Frame-1874">
      <div className="Group-1556">
        <p>Saldo</p>
        <button onClick={hideSaldo}>
          <i class="far fa-eye-slash"></i>
        </button>
      </div>

      <div className="Amount">
        <p id="saldo" > R$40.000,00</p>
      </div>
    </div>
  );
}

export default Frame1874;
