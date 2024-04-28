import "./App.css";
import { Container, Heading, Progress, Separator } from "@radix-ui/themes";
import HeaderScreen from "./screens/HeaderScreen";
import ShortIntro from "./screens/ShortIntro";
import FooterScreen from "./screens/FooterScreen";
import HomePageProjects from "./screens/HomePageProjects.tsx";
import useGetProjects from "./hooks/useGetProjects.ts";

function App() {
  var { data, isLoading, error } = useGetProjects();

  //console.log(data);

  return (
    <Container size="3" align="center">
      <HeaderScreen />
      <ShortIntro />
      <HomePageProjects
        title="Recent Project"
        projects={data?.filter((p) => p.Type == 1).slice(0, 3)}
      />

      <HomePageProjects
        title="Cloud Project"
        projects={data?.filter((p) => p.Type == 0).slice(0, 3)}
      />
      <Separator orientation="horizontal" size="4" my="5" />
      <FooterScreen />
    </Container>
  );
}

export default App;
