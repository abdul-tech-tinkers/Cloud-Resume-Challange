import { Flex, Text, Strong } from "@radix-ui/themes";
import { FaTwitter, FaLinkedin, FaGithub, FaMailchimp } from "react-icons/fa6";
import AppIconButton from "../components/AppIconButton";
import AppVisitCounter from "../components/AppVisitCounter";
import AppLink from "../components/AppLink";
import { BiMailSend } from "react-icons/bi";

const FooterScreen = () => {
  return (
    <Flex direction="row" justify="between">
      <Flex direction="row" align="center" gap="2">
        <Text color="gray">&copy; {new Date().getFullYear} Abdul Jameel</Text>
        <AppVisitCounter />
      </Flex>

      <Flex direction="row" gap="2" justify="center" align="center">
        <AppLink href="https://github.com/abdul-tech-tinkers/">
          <AppIconButton
            color="gray"
            onClick={() => {
              console.log("twitter");
            }}
          >
            <FaGithub />
          </AppIconButton>
        </AppLink>

        <AppLink href="mailto:b.abduljameel@gmail.com">
          <AppIconButton
            color="gray"
            onClick={() => {
              console.log("twitter");
            }}
          >
            <BiMailSend />
          </AppIconButton>
        </AppLink>

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
