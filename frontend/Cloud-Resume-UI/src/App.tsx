import "./App.css";
import { Container, Separator } from "@radix-ui/themes";
import HeaderScreen from "./screens/HeaderScreen";
import FooterScreen from "./screens/FooterScreen";

function App() {
  

  //console.log(data);

  return (
    <Container size="3" align="center">
      <HeaderScreen />
      <Separator orientation="horizontal" size="4" my="4" />
      <FooterScreen />
    </Container>
  );
}

export default App;
