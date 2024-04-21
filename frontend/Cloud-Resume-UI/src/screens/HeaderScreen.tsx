import { Flex } from "@radix-ui/themes";
import AppLink from "../components/AppLink";
import { FaSun } from "react-icons/fa6";

function HeaderScreen() {
  return (
    <Flex direction="row" gap="5" justify="center" align="center" p={5} my="5">
      <AppLink href="/">Home</AppLink>
      <AppLink href="/">About</AppLink>
      <AppLink href="/">Projects</AppLink>
      <AppLink href="/">Contact</AppLink>
      <FaSun height="25"  /> 
    </Flex>
  );
}

export default HeaderScreen;
