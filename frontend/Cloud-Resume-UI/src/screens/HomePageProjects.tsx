import { Flex, Heading } from "@radix-ui/themes";
import ProjectItem from "../components/ProjectItem.tsx";

const techStacks = ["C#", "ASP.NET"];
const HomePageProjects = () => {
  return (
    <Flex py="5" direction="column">
      <Heading>Recent Projects</Heading>
      <Flex gap="5">
        <ProjectItem
          name="Atellica Solution"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          id="1"
          techStacks={techStacks}
          tools={techStacks}
          frameworks={techStacks}
          endDate={new Date()}
          startDate={new Date()}
        />

        <ProjectItem
          name="Prime Disp Solution"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          id="1"
          techStacks={techStacks}
          tools={techStacks}
          frameworks={techStacks}
          endDate={new Date()}
          startDate={new Date()}
        />

        <ProjectItem
          name="Solar Solution"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          id="1"
          techStacks={techStacks}
          tools={techStacks}
          frameworks={techStacks}
          endDate={new Date()}
          startDate={new Date()}
        />
      </Flex>
    </Flex>
  );
};

export default HomePageProjects;
