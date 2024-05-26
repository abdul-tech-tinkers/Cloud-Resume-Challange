import { Badge, Flex, Heading, Text } from "@radix-ui/themes";

import { useParams } from "react-router-dom"; // Assuming you have a custom hook to fetch project details
import useGetProjectById from "../hooks/useGetProjectById";

const AppProjectDetails = () => {
  const { projectId } = useParams();
  const { data: project, isLoading } = useGetProjectById(projectId);

  // If the project is not yet loaded, you can return a loading state
   if (isLoading) {
     return <div>Loading...</div>;
   }

  return (
    <Flex my="3">
      <Flex direction="column" gap="2">
        <Flex align="center" gapY="5" justify="between">
          <Heading>{project?.Name}</Heading>
          <Badge color="blue">
            {project?.Type === 1 ? "Work Project" : "Personal Project"}
          </Badge>
        </Flex>
        <Text>{project?.Description}</Text>
        <Flex direction="row" gap="2">
          {project?.TechStacks?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppProjectDetails;
