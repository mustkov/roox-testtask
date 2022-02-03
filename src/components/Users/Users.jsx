import React from "react";
import Card from "../Card/Card";

export default function Users({repos}) {
    return (
        <div className="users">
        <h1 className="users_name">Список пользователей</h1>
        {repos.map((rep) => (
          <Card rep={rep} key={rep.id} />
        ))}
        <p>Найдено {repos.length} пользователей</p>
      </div>
    );
}

