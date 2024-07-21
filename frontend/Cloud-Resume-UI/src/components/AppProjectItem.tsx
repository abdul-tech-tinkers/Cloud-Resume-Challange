import { Project } from "../models/Project";
import { Badge, Flex, Separator, Text } from "@radix-ui/themes";
import AppProjectDate from "./AppProjectDate";
import AppProjectLinkItem from "./AppProjectLinkItem";
import AppLink from "./AppLink";
import { GrGithub } from "react-icons/gr";

interface props {
  project: Project;
}

const AppProjectItem = ({ project }: props) => {
  return (
      <Flex my="3">
        <Flex direction="column" gap="2">
          <Flex align="center" gapY="2" gapX="5" justify="start">
            <AppProjectLinkItem project={project} />
            <Badge color="blue">
              {project.Type === 1 ? "Work Project" : "Personal Project"}
            </Badge>
            <AppLink href={project.GithubLink}>
              <GrGithub />
            </AppLink>
          </Flex>
          <AppProjectDate
              startDate={project.StartDate}
              endDate={project.EndDate}
          />
          <Text>{project.Description}</Text>

          <Flex direction="row" gap="2">
            {project?.TechStacks?.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
            ))}
          </Flex>
          <Separator orientation="horizontal" size="3" />
        </Flex>
      </Flex>
  );
};

export default AppProjectItem;
