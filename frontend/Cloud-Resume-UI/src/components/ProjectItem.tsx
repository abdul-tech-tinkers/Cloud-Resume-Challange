import { Project } from "../models/Project";
import {Badge, Card, Flex, Heading, Text} from "@radix-ui/themes";

function ProjectItem(project: Project) {
  return (
    <Card>
      <Heading>{project.name}</Heading>
        {
            <Flex direction="row" gap="1">
                {project.techStacks.map((techStack) => (
                    <Badge>{techStack}</Badge>
                ))}
            </Flex>
        }
      <Text truncate>{project.description}</Text>
    </Card>
  );
}

export default ProjectItem;
