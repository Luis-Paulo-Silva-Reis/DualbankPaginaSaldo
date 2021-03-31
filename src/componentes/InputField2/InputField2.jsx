import React from "react";
import "./InputField2.css";
import {hideSaldoDisponivel} from '../../js/jssaldodisponivel'

function InputField2() {
  return (
    <div className="InputField2">
      
      <div className="shield">
        <p><i class="fas fa-shield-alt"></i></p>
      </div>
      
      
      <div className="inputAndLabel">
        <p>Saldo disponivel</p>
        <p className="Values" id="saldodisponivel">R$40.000,00</p>
      </div>

      <div className="InputField2-eye">
        <button onClick={hideSaldoDisponivel}>
          <i class="far fa-eye-slash"></i>
        </button>
      </div>
    </div>
  );
}

export default InputField2;
