import { useQuery } from "@tanstack/react-query";
import { Project } from "../models/Project";
import { AxiosError } from "axios";
import ProjectService from "../services/ProjectService";

const useGetProjectById = (id: string) => {
  return useQuery<Project, AxiosError, Project>({
    queryKey: ["GetProjectById", id],
    queryFn: () => ProjectService(`GetProjectById`).get(id),
  });
};

export default useGetProjectById;
