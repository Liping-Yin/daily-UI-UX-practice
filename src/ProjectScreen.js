import React, { useEffect } from "react";
import Project from "./components/Project";
import Project1 from "./components/projects/Project1";

export default function ProjectScreen(props) {
  // project id
  // const projectId = props.match.params.id;
  return (
    <Project>
      <Project1></Project1>
    </Project>
  );
}
