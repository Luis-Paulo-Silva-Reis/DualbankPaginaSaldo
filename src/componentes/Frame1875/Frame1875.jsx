import React from "react";
import "./Frame1875.css";

function Frame1875() {
  return (
    <div className="box-user">
      <div className="user-name">
        <p>Conta Corrente</p>
        <button>
          <i class="fas fa-sort-down"></i>
        </button>
      </div>

      <div class="break"></div>

      <div className="userData">
        <p>Ag. 00005-1 </p>
        <p>C.C. 00000000000000000020-1 </p>
        <button>
          <i class="far fa-copy"></i>
        </button>
      </div>
    </div>
  );
}

export default Frame1875;
