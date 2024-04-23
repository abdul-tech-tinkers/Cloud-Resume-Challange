import { Project } from "../models/Project";
import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";

function ProjectItem(project: Project) {
  return (
    <Card my="5">
      <Flex direction="column" gap="2">
        <Heading>{project.name}</Heading>
        <Flex direction="row" gap="1">
          {project.techStacks.map((techStack) => (
            <Badge>{techStack}</Badge>
          ))}
        </Flex>
        <Text wrap="wrap">{project.description}</Text>
        <Text color="gray">
          {project.startDate.getMonth()}/{project.startDate.getFullYear()}-{" "}
          {project.endDate.getMonth()}/{project.endDate.getFullYear()}
        </Text>

        {project.frameworks && (
          <Flex direction="row" gap="1">
            {project.frameworks.map((framework) => (
              <Text size="1">{framework}</Text>
            ))}
          </Flex>
        )}

        {project.tools && (
          <Flex direction="row" gap="1">
            {project.tools.map((tool) => (
              <Text size="1">{tool}</Text>
            ))}
          </Flex>
        )}
      </Flex>
    </Card>
  );
}

export default ProjectItem;
