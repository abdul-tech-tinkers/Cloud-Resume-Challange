import { Project } from "../models/Project";
import { Badge, Flex, Heading, Text } from "@radix-ui/themes";
import AppProjectDate from "./AppProjectDate";
import AppProjectLinkItem from "./AppProjectLinkItem";

interface props {
  project: Project;
}

const AppProjectItem = ({ project }: props) => {
  return (
    <Flex my="3">
      <Flex direction="column" gap="2">
        <Flex align="center" gapY="5" justify="between">
          <AppProjectLinkItem project={project} />
          <Badge color="blue">
            {project.Type === 1 ? "Work Project" : "Personal Project"}
          </Badge>
        </Flex>
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
