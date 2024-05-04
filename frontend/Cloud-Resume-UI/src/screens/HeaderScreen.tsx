import { Flex, Heading, Strong } from "@radix-ui/themes";
import AppLink from "../components/AppLink";
import { FaSun } from "react-icons/fa6";
import logo from "../assets/AJ.png";
import { Link } from "react-router-dom";
const HeaderScreen = () => {
  return (
    <Flex direction="row" my="5" justify="between">
      <Flex direction="row" align="center" gap="2">
        <img src={logo} height={50} width={50} />
        {/* <Heading>
          <Strong>Abdul Jameel</Strong>
        </Heading> */}
      </Flex>

      <Flex direction="row" gap="5" justify="center" align="center" p={5}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <FaSun height="25" />
      </Flex>
    </Flex>
  );
};

export default HeaderScreen;
