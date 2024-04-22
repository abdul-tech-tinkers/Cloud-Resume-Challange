import "./App.css";
import { Container, Heading, Separator } from "@radix-ui/themes";
import HeaderScreen from "./screens/HeaderScreen";
import ShortIntro from "./screens/ShortIntro";
import FooterScreen from "./screens/FooterScreen";
import ProjectItem from "./components/ProjectItem";

const techStacks = ["C#", "ASP.NET"];
function App() {
  return (
    <Container size="4" align="center">
      <HeaderScreen />
      <ShortIntro />

      <ProjectItem
        name="name"
        description="description"
        id="1"
        techStacks={techStacks}
        endDate={new Date()}
      />
      <Separator orientation="horizontal" size="4" my="8" />
      <FooterScreen />
    </Container>
  );
}

export default App;
