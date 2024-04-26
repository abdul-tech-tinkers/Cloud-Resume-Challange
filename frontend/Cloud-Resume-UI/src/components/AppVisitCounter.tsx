import useGetVisitorCount from "../hooks/useGetVisitorCount";
import { Badge, Text } from "@radix-ui/themes";

const AppVisitCounter = () => {
  const { data, isLoading, error } = useGetVisitorCount();

  if (isLoading) <Text>Loading...</Text>;
  if (error) <Text>Error</Text>;
  return (
    <Text>
      Visits <Badge>{data?.Visits ?? "No visits yet"}</Badge>
    </Text>
  );
};

export default AppVisitCounter;
