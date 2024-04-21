import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container, Heading } from "@radix-ui/themes";
import HeaderScreen from "./screens/HeaderScreen";

function App() {
  return (
    <Container size="4" align="center">
      <HeaderScreen />
    </Container>
  );
}

export default App;
