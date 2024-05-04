import { Flex, Heading, Text } from "@radix-ui/themes";
import ProjectCardItem from "../components/ProjectCardItem.tsx";
import { Project } from "../models/Project.tsx";
import AppIconButton from "../components/AppIconButton.tsx";
import { FaArrowRight } from "react-icons/fa6";

interface props {
  title: string;
  projects: Project[];
}
const HomePageProjects = ({ title, projects }: props) => {
  return (
    <Flex py="5" direction="column">
      <Flex direction="row" justify="between" align="center">
        <Heading>{title}</Heading>
        <Flex direction="row" justify="between" gap="1" align="center">
          <Text size="1">All {title}</Text>
          <AppIconButton color="gray" onClick={() => console.log("arrow")}>
            <FaArrowRight size={10} />
          </AppIconButton>
        </Flex>
      </Flex>
      <Flex gap="5" key={1234}>
        {projects?.map((project) => (
          <ProjectCardItem key={project?.id} project={project} />
        ))}
      </Flex>
    </Flex>
  );
};

export default HomePageProjects;
