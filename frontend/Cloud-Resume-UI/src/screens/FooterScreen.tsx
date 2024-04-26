import { Flex, Text, Strong } from "@radix-ui/themes";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import AppIconButton from "../components/AppIconButton";
import AppVisitCounter from "../components/AppVisitCounter";

function FooterScreen() {
  return (
    <Flex direction="row" justify="between">
      <Flex direction="row" align="center" gap="2">
        <Text color="gray">&copy; {new Date().getFullYear} Abdul Jameel</Text>
        <AppVisitCounter />
      </Flex>

      <Flex direction="row" gap="2" justify="center" align="center">
        <AppIconButton
          onClick={() => {
            console.log("linkedin");
          }}
        >
          <FaLinkedin />
        </AppIconButton>
        <AppIconButton
          onClick={() => {
            console.log("twitter");
          }}
        >
          <FaTwitter />
        </AppIconButton>
      </Flex>
    </Flex>
  );
}

export default FooterScreen;
