import "./App.css";
import { Container, Heading, Separator } from "@radix-ui/themes";
import HeaderScreen from "./screens/HeaderScreen";
import ShortIntro from "./screens/ShortIntro";
import FooterScreen from "./screens/FooterScreen";

function App() {
  return (
    <Container size="4" align="center">
      <HeaderScreen />
      <ShortIntro/>
      <Separator orientation="horizontal" size="4" my="8"/>
      <FooterScreen/>
    </Container>
  );
}

export default App;
