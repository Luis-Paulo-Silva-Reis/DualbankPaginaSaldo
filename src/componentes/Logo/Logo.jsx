import React from "react";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src="./logo512.png" alt="" />
      <p>
        <span className="pricolor">Dual</span>
        <span className="seccolor">bank</span>
      </p>
    </div>
  );
}

export default Logo;
