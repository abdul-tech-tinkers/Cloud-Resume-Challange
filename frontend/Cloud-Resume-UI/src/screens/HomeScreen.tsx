import { Container, Separator } from "@radix-ui/themes";
import FooterScreen from "./FooterScreen";
import ShortIntro from "./ShortIntro";
import HeaderScreen from "./HeaderScreen";
import { Outlet } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Container size="3" align="center">
      <HeaderScreen />
      
      <Outlet/>
      <Separator orientation="horizontal" size="4" my="4" />
      <FooterScreen />
    </Container>
  );
};
export default HomeScreen;
