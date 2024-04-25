import { useQuery } from "@tanstack/react-query";
import { Visitor } from "../models/Visitor";
import { AxiosError } from "axios";
import VisitorService from "../services/VisitorService";

const useGetVisitorCount = () => {
  return useQuery<Visitor, AxiosError, Visitor>({
    queryKey: ["GetVisitorCount"],
    queryFn: VisitorService("GetCounter").get,
  });
};
export default useGetVisitorCount;
