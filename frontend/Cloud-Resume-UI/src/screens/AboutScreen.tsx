import { Flex, Heading } from "@radix-ui/themes";
import ShortIntro from "./ShortIntro";

const AboutScreen = () => {
  return (
    <Flex mt="5" direction="column" gapY="2">
      <Heading size="8">About Me</Heading>
      <ShortIntro />
    </Flex>
  );
};
export default AboutScreen;
