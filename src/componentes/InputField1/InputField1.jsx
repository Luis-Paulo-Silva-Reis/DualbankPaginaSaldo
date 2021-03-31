import React from "react";
import "./InputField1.css";

function InputField1() {
  return (
    <div className="InputField1">
      <div className="Content-data-text">
        <p>Data do saldo</p>
        {/* <p>07/12/2020</p> */}
        <input type="date" required />
      </div>
      <div className="Carets">
        <button>
          <i class="fas fa-sort-down"></i>
        </button>
      </div>
    </div>
  );
}

export default InputField1;
