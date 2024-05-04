import { Project } from "../models/Project";
import { Badge, Flex, Heading, Text } from "@radix-ui/themes";
import AppProjectDate from "./AppProjectDate";

interface props {
  project: Project;
}

const AppProjectItem = ({ project }: props) => {
  return (
    <Flex my="3">
      <Flex direction="column" gap="2">
        <Heading>{project.Name}</Heading>
        <AppProjectDate
          startDate={project.StartDate}
          endDate={project.EndDate}
        />
        <Text>{project.Description}</Text>

        <Flex direction="row" gap="2">
          {project?.TechStacks?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppProjectItem;
