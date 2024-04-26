import { Visitor } from "../models/Visitor";
import ApiClient from "./ApiClient";

const VisitorService = (url: string) => {
  const endpoint = `/Visitor/${url}`;
  return new ApiClient<Visitor>(endpoint);
};
export default VisitorService;
