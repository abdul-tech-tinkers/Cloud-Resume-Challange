import { Flex, Heading } from "@radix-ui/themes";
import useGetProjects from "../hooks/useGetProjects";
import AppProjectItem from "../components/AppProjectItem";

const ProjectsScreen = () => {
  const { data } = useGetProjects();

  return (
    <Flex mt="9" direction="column">
      <Heading mb="5" size="8">
        My Projects
      </Heading>
      {data?.map((project) => (
        <AppProjectItem project={project} />
      ))}
    </Flex>
  );
};
export default ProjectsScreen;
