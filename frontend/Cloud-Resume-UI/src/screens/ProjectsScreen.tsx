import { Flex, Heading } from "@radix-ui/themes";
import useGetProjects from "../hooks/useGetProjects";
import AppProjectItem from "../components/AppProjectItem";

const ProjectsScreen = () => {
  const { data } = useGetProjects();

  return (
    <Flex mt="5" direction="column">
      <Heading mb="5" size="8">
        Work Projects
      </Heading>
      {data
        ?.filter((p) => p.Type == 1)
        .map((project) => (
          <AppProjectItem key={project.Id} project={project} />
        ))}
      <Heading mb="5" size="8">
        Cloud Projects
      </Heading>
      {data
        ?.filter((p) => p.Type == 0)
        .map((project) => (
          <AppProjectItem key={project.Id} project={project} />
        ))}
    </Flex>
  );
};
export default ProjectsScreen;
