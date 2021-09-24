import React from "react";
import { projects } from "../data.js";
import Card from "./Card";
export default function Projects() {
  return (
    <div className="projects">
      {projects.map(({ id, name, url, description }) => (
        <Card
          key={id}
          id={id}
          url={url}
          name={name}
          description={description}
        />
      ))}
    </div>
  );
}
