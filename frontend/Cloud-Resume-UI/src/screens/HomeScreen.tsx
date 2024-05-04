import { Container, Flex, Separator } from "@radix-ui/themes";
import FooterScreen from "./FooterScreen";
import HeaderScreen from "./HeaderScreen";
import { Outlet } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Container size="3" align="center" style={{ height: "100vh" }}>
      <HeaderScreen />
      <Flex style={{ background: "transparent", flex: 1 }}>
        <Outlet />
      </Flex>
      <Separator orientation="horizontal" size="4" my="4" />
      <FooterScreen />
    </Container>
  );
};
export default HomeScreen;
