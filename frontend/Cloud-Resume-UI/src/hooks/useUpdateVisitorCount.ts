import { QueryClient, useMutation } from "@tanstack/react-query";
import VisitorService from "../services/VisitorService";

const queryClient = new QueryClient();
const useUpdateVisitorCount = () => {
  return useMutation({
    mutationKey: ["updateVisitorCount"],
    mutationFn: VisitorService("IncrementCounter").post,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["GetVisitorCount"] });
    },
  });
};
export default useUpdateVisitorCount;
