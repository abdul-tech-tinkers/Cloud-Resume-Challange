import { FaGithub } from "react-icons/fa6";
import { Project } from "../models/Project";
import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";
import AppIconButton from "./AppIconButton";
import { RiTimeLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

function ProjectItem(project: Project) {
  return (
    <Card my="5">
      <Flex direction="column" gap="2">
        <Flex direction="row" align="center" justify="between">
          <Heading>{project.name}</Heading>
          {project.githubLink && (
            <AppIconButton onClick={() => console.log(project.id)}>
              <FaGithub />
            </AppIconButton>
          )}
        </Flex>
        <Flex direction="row" gap="1">
          {project.techStacks.map((techStack) => (
            <Badge>{techStack}</Badge>
          ))}
        </Flex>
        <Text wrap="wrap">{project.description}</Text>
        <Flex direction="row" align="center" gap="1">
          <RiTimeLine color="gray" />
          <Text size="1" color="gray">
            {project.startDate.getMonth()}/{project.startDate.getFullYear()}-{" "}
            {project.endDate.getMonth()}/{project.endDate.getFullYear()}
          </Text>
        </Flex>

        <Flex direction="row" align="center" gap="1">
          <CiSettings color="gray" />
          {project.frameworks && (
            <Flex direction="row" gap="1">
              {project.frameworks.map((framework) => (
                <Text color="gray" size="1">
                  {framework}
                </Text>
              ))}
            </Flex>
          )}
        </Flex>

        <Flex direction="row" align="center" gap="1">
          <FaTools color="gray" />
          {project.tools && (
            <Flex direction="row" gap="1">
              {project.tools.map((tool) => (
                <Text color="gray" size="1">
                  {tool}
                </Text>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}

export default ProjectItem;
