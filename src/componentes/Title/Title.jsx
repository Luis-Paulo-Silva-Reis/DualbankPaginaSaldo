import React from "react";
import "./Title.css";

function Title() {
  return (
    <div className="Title">
      <h1>Saldo Bancário</h1>

      <div className="printer">
        <button><i class="fas fa-print"></i></button>
      </div>
      
      <div className="downloadFile">
        <button><i class="fas fa-file-download"></i></button>
      </div>
      
      <div className="share">
        <button><i class="fas fa-share-alt"></i></button>
      </div>
    
    </div>
  );
}

export default Title;
