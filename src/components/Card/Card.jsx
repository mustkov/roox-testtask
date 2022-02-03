import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ rep }) {

  return (
    <div className="card">
      <div className="card_data">
        <p className="card_data_p card_name">
          ФИО:<span>{rep.name}</span>
        </p>
        <p className="card_data_p card_town">
          Город:<span>{rep.address.city}</span>
        </p>
        <p className="card_data_p card_company">
          Компания:<span>{rep.company.name}</span>
        </p>
      </div>
      <Link
        className="about"
        to={{
          pathname: `/profile/${rep.id}`,
          propsSearch: rep,
        }}
      >
        Подробнее
      </Link>
    </div>
  );
}

export default Card;
