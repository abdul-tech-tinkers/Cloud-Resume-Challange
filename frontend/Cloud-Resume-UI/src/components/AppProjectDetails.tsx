import { Badge, Flex, Heading, Text } from "@radix-ui/themes";

import { useParams } from "react-router-dom"; // Assuming you have a custom hook to fetch project details
import useGetProjectById from "../hooks/useGetProjectById";
import { CiSettings } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import AppProjectDate from "./AppProjectDate";

const AppProjectDetails = () => {
  const { projectId } = useParams();
  const { data: project, isLoading } = useGetProjectById(projectId);

  // If the project is not yet loaded, you can return a loading state
   if (isLoading) {
     return <div>Loading...</div>;
   }

   if(!project) {
      return <div>Project not found</div>
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

        <AppProjectDate
          startDate={project.StartDate}
          endDate={project.EndDate}
        />

        <Flex direction="row" align="center" gap="1">
          <CiSettings color="gray" />
          {project?.Frameworks && (
            <Flex direction="row" gap="1">
              {project?.Frameworks?.map((framework) => (
                <Text key={framework} color="gray" size="1">
                  {framework}
                </Text>
              ))}
            </Flex>
          )}
        </Flex>

        <Flex direction="row" align="center" gap="1">
          <FaTools color="gray" />
          {project?.Tools && (
            <Flex direction="row" gap="1">
              {project?.Tools?.map((tool) => (
                <Text key={tool} color="gray" size="1">
                  {tool}
                </Text>
              ))}
            </Flex>
          )}
        </Flex>
        
      </Flex>
    </Flex>
  );
};

export default AppProjectDetails;
