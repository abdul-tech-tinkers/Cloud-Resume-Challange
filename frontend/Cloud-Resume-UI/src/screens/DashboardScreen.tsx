import { Flex } from "@radix-ui/themes";
import HomePageProjects from "./HomePageProjects";
import useGetProjects from "../hooks/useGetProjects";
import ShortIntro from "./ShortIntro";

const DashboardScreen = () => {
  var { data, isLoading, error } = useGetProjects();
  return (
    <Flex direction="column">
      <ShortIntro />
      <HomePageProjects
        title="Recent Project"
        projects={data?.filter((p) => p.Type == 1).slice(0, 3)}
      />

      <HomePageProjects
        title="Cloud Project"
        projects={data?.filter((p) => p.Type == 0).slice(0, 3)}
      />
    </Flex>
  );
};
export default DashboardScreen;
