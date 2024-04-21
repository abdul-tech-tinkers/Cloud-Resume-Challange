import { Flex, Heading, Strong } from "@radix-ui/themes";
import AppLink from "../components/AppLink";
import { FaSun } from "react-icons/fa6";
import logo from "../assets/AJ.png";
function HeaderScreen() {
  return (
    <Flex direction="row" my="5" justify="between" mx="5">
      <Flex direction="row" align="center" gap="2">
        <img src={logo} height={50} width={50} />
        <Heading>
          <Strong>Abdul Jameel</Strong>
        </Heading>
      </Flex>

      <Flex direction="row" gap="5" justify="center" align="center" p={5}>
        <AppLink href="/">Home</AppLink>
        <AppLink href="/">About</AppLink>
        <AppLink href="/">Projects</AppLink>
        <AppLink href="/">Contact</AppLink>
        <FaSun height="25" />
      </Flex>
    </Flex>
  );
}

export default HeaderScreen;
