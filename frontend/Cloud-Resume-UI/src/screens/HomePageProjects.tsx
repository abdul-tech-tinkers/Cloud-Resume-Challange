import { Flex, Heading } from "@radix-ui/themes";
import ProjectItem from "../components/ProjectItem.tsx";
import { Project } from "../models/Project.tsx";
import AppProjectItem from "../components/AppProjectItem.tsx";

interface props {
  title: string;
  projects: Project[];
}
const HomePageProjects = ({ title, projects }: props) => {
  return (
    <Flex py="5" direction="column">
      <Heading>{title}</Heading>
      <Flex gap="5" key={1234}>
        {projects?.map((project) => (
          <ProjectItem key={project?.id} project={project} />
        ))}
      </Flex>
    </Flex>
  );
};

export default HomePageProjects;
