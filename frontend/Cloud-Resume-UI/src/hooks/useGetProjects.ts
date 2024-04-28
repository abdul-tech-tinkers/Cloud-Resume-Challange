import { useQuery } from "@tanstack/react-query";
import { Project } from "../models/Project";
import { AxiosError } from "axios";
import ProjectService from "../services/ProjectService";

const useGetProjects = () => {
  return useQuery<Project[], AxiosError, Project[]>({
    queryKey: ["GetAllProjects"],
    queryFn: ProjectService("GetProjects").getAll,
  });
};

export default useGetProjects;
