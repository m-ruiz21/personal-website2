import { TimelineItem, TimelineRoot, } from "@/components/ui/timeline";
import { Collapsible, Box, Button, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

export interface Project {
  projectName: string;
  time: string;
  link?: string; // Optional link
  tools: string[];
  details: string[];
}

interface ProjectTimelineProps {
  projects: Project[];
}

const Pill = ({ label }: { label: string }) => (
  <Box
    display="inline-block"
    px={3}
    py={1}
    borderRadius="full"
    bg="gray.200"
    fontSize="sm"
    color="#192F6D"
    background="rgba(80, 125, 250, 0.25)"
    fontWeight="bold"
    textAlign="center"
    mr={2}
    mb={2}
  >
    {label}
  </Box>
);

const ProjectContent = ({ project }: { project: Project }) => (
  <Box
    borderWidth="2px"
    borderRadius="lg"
    borderColor="black"
    p={4}
    width="100%"
  >
    <Collapsible.Root>
      <Collapsible.Trigger width="full">
        <Flex
          alignItems="flex-start" 
          justifyContent="space-between" 
          flexDirection="row"
          gap={[2, 4]} 
          width="100%"
        >
          <Flex
            flexDirection="column"
            alignItems="flex-start"
          >
            <Text fontWeight="bold" textAlign={"start"} color="black" fontSize={["lg", "3xl"]}>
              {project.projectName}
            </Text>
            <Text color="gray.600" textAlign={"start"} fontSize={["md", "lg"]}>
              {project.time}
            </Text>
          </Flex>

          {project.link && (
            <ChakraLink 
                href={project.link} 
            >
              <Button
                size="sm"
                variant="outline"
                alignSelf={["flex-center", "flex-center"]} 
                mt={[2, 0]} 
                borderColor="#192F6D"
                color="#192F6D"
                borderRadius="md"
                borderWidth={2}
                padding={2}
                flexShrink={0}
                fontSize={["sm", "md"]}
              >
                View Project
              </Button>
            </ChakraLink>
          )}
        </Flex>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box ml={[0, 0]} color="black" mt={4}>
          {project.details.map((detail, index) => (
            <Text key={index} fontSize={["md", "lg"]} mt={2}>
              {detail}
            </Text>
          ))}
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>

    {/* Pills (Tools used) */}
    <Flex mt={4} wrap="wrap" gap={2}>
      {project.tools.map((tool, index) => (
        <Pill key={index} label={tool} />  // Using the custom Pill component
      ))}
    </Flex>
  </Box>
);

const Project = ({ project }: { project: Project }) => (
  <TimelineItem mt={[4,6]}>
    <ProjectContent project={project} />
  </TimelineItem>
);

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ projects }) => {
  return (
    <TimelineRoot maxWidth={"100%"} mt={6} colorPalette={"black"}>
      {projects.map((project, index) => (
        <>
          <Project key={index} project={project} />
        </>
      ))}
    </TimelineRoot>
  );
};

export default ProjectTimeline;
