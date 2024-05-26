import useGetVisitorCount from "../hooks/useGetVisitorCount";
import { Badge, Flex, Text } from "@radix-ui/themes";
import useUpdateVisitorCount from "../hooks/useUpdateVisitorCount";
import { useEffect } from "react";

const AppVisitCounter = () => {
  const { data, isLoading, error } = useGetVisitorCount();
  // This ensures mutate is only called once after the first render

  if (isLoading) <Text>Loading...</Text>;
  if (error) <Text>Error</Text>;
  return (
    <Flex gap="2" direction="row" align="center">
      <Text color="gray">visits</Text>
      <Badge>{data?.Visits}</Badge>
    </Flex>
  );
};

export default AppVisitCounter;
