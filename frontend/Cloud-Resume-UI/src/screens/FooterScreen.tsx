import { Flex, Text, Strong } from "@radix-ui/themes";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import AppIconButton from "../components/AppIconButton";
import AppVisitCounter from "../components/AppVisitCounter";
import AppLink from "../components/AppLink";

const FooterScreen = () => {
  return (
    <Flex direction="row" justify="between">
      <Flex direction="row" align="center" gap="2">
        <Text color="gray">&copy; {new Date().getFullYear} Abdul Jameel</Text>
        <AppVisitCounter />
      </Flex>

      <Flex direction="row" gap="2" justify="center" align="center">
        {/* Add LinkedIn icon and link here */}
        <AppLink href="https://in.linkedin.com/in/abduljameel">
          <AppIconButton
            color="gray"
            onClick={() => {
              console.log("linkedin");
            }}
          >
            <FaLinkedin />
          </AppIconButton>
        </AppLink>
        {/* Add Twitter icon and link here */}
        <AppLink href="https://twitter.com/abduljameelb">
          <AppIconButton
            color="gray"
            onClick={() => {
              console.log("twitter");
            }}
          >
            <FaTwitter />
          </AppIconButton>
        </AppLink>


      </Flex>
    </Flex>
  );
};

export default FooterScreen;
