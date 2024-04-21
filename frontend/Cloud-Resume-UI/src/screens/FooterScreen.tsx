import { Flex, Heading, Strong } from "@radix-ui/themes";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import AppIconButton from "../components/AppIconButton";

function FooterScreen() {
  return (
    <Flex direction="row" justify="between">
      <Flex direction="row" align="center" gap="2">
        <Heading>
          <Strong>&copy; {new Date().getFullYear} Abdul Jameel</Strong>
        </Heading>
      </Flex>

      <Flex direction="row" gap="2" justify="center" p={5}>
        <AppIconButton>
          <FaLinkedin />
        </AppIconButton>
        <AppIconButton>
          <FaTwitter />
        </AppIconButton>
      </Flex>
    </Flex>
  );
}

export default FooterScreen;
