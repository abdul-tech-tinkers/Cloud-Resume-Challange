import {Project} from "../models/Project";
import {Badge, Card, Flex, Heading, Text} from "@radix-ui/themes";

function ProjectItem(project: Project) {
    return (
        <Card>
            <Flex direction="column" gap="2">
                <Heading>{project.name}</Heading>
                {
                    <Flex direction="row" gap="1">
                        {project.techStacks.map((techStack) => (
                            <Badge>{techStack}</Badge>
                        ))}
                    </Flex>
                }
                <Text truncate>{project.description}</Text>
            </Flex>
        </Card>
    );
}

export default ProjectItem;
