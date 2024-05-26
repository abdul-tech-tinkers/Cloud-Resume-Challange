import { Flex, Heading, Link } from "@radix-ui/themes";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactScreen = () => {
  return (
    <Flex direction="column" gap="5" mt="5">
      <Heading size="8">Contact Me</Heading>
      <Flex align="center" gap="2">
      <BsLinkedin/>
      <Link href="https://in.linkedin.com/in/abduljameel" target="_blank">Abdul Jameel</Link>
      </Flex>
      <Flex align="center" gap="2">
      <MdEmail/>
      <Link href="mailto:b.abduljameel@gmail.com" target="_blank">b.abduljameel@gmail.com</Link>
      </Flex>
    </Flex>
  )
};
export default ContactScreen;
