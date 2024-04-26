import "./App.css";
import { Container, Heading, Separator } from "@radix-ui/themes";
import HeaderScreen from "./screens/HeaderScreen";
import ShortIntro from "./screens/ShortIntro";
import FooterScreen from "./screens/FooterScreen";
import HomePageProjects from "./screens/HomePageProjects.tsx";

function App() {
  return (
    <Container size="3" align="center">
      <HeaderScreen />
      <ShortIntro />
      <HomePageProjects />
      <Separator orientation="horizontal" size="4" my="5" />
      <FooterScreen />
    </Container>
  );
}

export default App;
