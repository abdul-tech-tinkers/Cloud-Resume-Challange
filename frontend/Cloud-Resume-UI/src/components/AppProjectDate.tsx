import { Flex, Text } from "@radix-ui/themes";
import { RiTimeLine } from "react-icons/ri";

interface Props {
  startDate: Date;
  endDate: Date;
}
const AppProjectDate = ({ startDate, endDate }: Props) => {
  return (
    <Flex direction="row" align="center" gap="1">
      <RiTimeLine color="gray" />
      <Text size="1" color="gray">
        {new Date(startDate).getMonth() + 1}/{new Date(startDate).getFullYear()}
        - {new Date(endDate).getMonth() + 1}/{new Date(endDate).getFullYear()}
      </Text>
    </Flex>
  );
};
export default AppProjectDate;
