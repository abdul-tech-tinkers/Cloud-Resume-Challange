import { Flex, Heading, Strong } from "@radix-ui/themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import logo from "../assets/AJ.png";
import { Link } from "react-router-dom";
import useThemeStore from "../stores/ThemeStore";
const HeaderScreen = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Flex direction="row" my="5" justify="between">
      <Flex direction="row" align="center" gap="2">
        <img src={logo} height={50} width={50} />
        <Heading>
          <Strong>Abdul Jameel</Strong>
        </Heading>
      </Flex>

      {/* <Flex direction="row" gap="5" justify="center" align="center" p="5">
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          About
        </Link>
        <Link style={{ textDecoration: "none" }} to="/projects">
          Projects
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          Contact
        </Link>
        { theme==="dark" ? <FaSun height="25" onClick={toggleTheme} /> : <FaMoon height="25" onClick={toggleTheme} /> }
        
      </Flex> */}
    </Flex>
  );
};

export default HeaderScreen;
