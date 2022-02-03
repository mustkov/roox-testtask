import React from "react";

export default function Sort({ sortCities, sortCompany }) {
  return (
    <div className="sort">
      <h1 className="sort_name">Сортировка</h1>
      <a
        className="sort_button waves-effect waves-light btn"
        onClick={() => sortCities()}
      >
        по городу
      </a>
      <a 
      className="sort_button waves-effect waves-light btn"
      onClick={() => sortCompany()}
      >по компании</a>
    </div>
  );
}
