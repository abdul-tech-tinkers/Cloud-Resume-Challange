import { Heading } from "@radix-ui/themes";

import { Link } from "react-router-dom";
import { Project } from "../models/Project";

interface props {
  project: Project;
}

const AppProjectLinkItem = ({ project }: props) => {
  return (
    <Heading>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={`/projects/${project.Id}`}
        key={project.Id}
      >
        {project.Name}
      </Link>
    </Heading>
  );
};

export default AppProjectLinkItem;
