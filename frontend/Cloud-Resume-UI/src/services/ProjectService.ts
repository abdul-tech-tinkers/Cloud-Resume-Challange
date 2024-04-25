import { Project } from "../models/Project";
import ApiClient from "./ApiClient";

const ProjectService = (url: string) => {
  const endPoint = `/Projects/${url}`;
  return new ApiClient<Project>(endPoint);
};

export default ProjectService;
