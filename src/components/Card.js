import React from "react";
import { Link } from "react-router-dom";

export default function Card({ url, id, name, description, ...props }) {
  return (
    <div className={`card card--${id}`}>
      <h2 className="card__title">{name}</h2>
      <p>{description}</p>
      <Link to={`/project/${id}`}>
        <img
          className="card__img"
          src={process.env.PUBLIC_URL + url}
          alt="project "
        />
      </Link>
    </div>
  );
}
