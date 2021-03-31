import React from "react";
import "./SearchBar.css";

function searchbar() {
  return (
    <div className="SearchBar">
      <input
        className="inputArea"
        type="text"
        name=""
        id=""
        placeholder="Pesquisar"
      />
      <i class="fas fa-search inputAreaicon"></i>
    </div>
  );
}

export default searchbar;
