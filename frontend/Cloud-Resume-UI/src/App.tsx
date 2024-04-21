import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container size={3}>
      <h1>Container</h1>
    </Container>
  );
}

export default App;
