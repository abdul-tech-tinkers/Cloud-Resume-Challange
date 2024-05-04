import { FaGithub } from "react-icons/fa6";
import { Project } from "../models/Project";
import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";
import AppIconButton from "./AppIconButton";
import { RiTimeLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import AppProjectDate from "./AppProjectDate";

interface props {
  project: Project;
}

const ProjectCardItem = ({ project }: props) => {
  console.log(project);
  return (
    <Card my="5">
      <Flex direction="column" gap="2">
        <Flex direction="row" align="center" justify="between">
          <Heading>{project.Name}</Heading>
          {project.GithubLink && (
            <AppIconButton onClick={() => console.log(project.Id)}>
              <FaGithub />
            </AppIconButton>
          )}
        </Flex>
        <Flex direction="row" gap="1">
          {project?.TechStacks?.map((techStack) => (
            <Badge key={techStack}>{techStack}</Badge>
          ))}
        </Flex>
        <Text wrap="wrap">{project.Description}</Text>
        <AppProjectDate startDate={project.StartDate} endDate={project.EndDate}/>

        <Flex direction="row" align="center" gap="1">
          <CiSettings color="gray" />
          {project.Frameworks && (
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
          {project.Tools && (
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
    </Card>
  );
};

export default ProjectCardItem;
