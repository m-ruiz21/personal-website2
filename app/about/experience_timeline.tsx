import { TimelineItem, TimelineRoot, TimelineContent } from "@/components/ui/timeline";
import { Collapsible, Box, Image, TimelineConnector, Flex, Text } from "@chakra-ui/react";

export interface Role {
  companyImage: string;
  companyName: string;
  roleName: string;
  datesInvolved: string;
  details: string[];
}

interface ExperienceTimelineProps {
  roles: Role[];
}

const photoSize = [10, 16];
const ExperienceContent = ({ role }: { role: Role }) => (
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
          alignItems={"flex-start"} 
          justifyContent="space-between"
          flexDirection={["column", "row"]} 
          gap={[2, 4]} 
          width="100%"
        >
          <Flex
            alignItems="center" 
            gap={4}
            flexDirection={["row", "row"]} // Keep image and text in a row for both mobile and larger screens
            width="100%"
          >
            <Image
              src={role.companyImage}
              alt={role.companyName}
              boxSize={photoSize} 
              objectFit="contain"
              flexShrink={0} 
            />

            <Flex
              flexDirection="column"
              alignItems="flex-start"
            >
              <Text fontWeight="bold" color="black" fontSize={["lg", "3xl"]}>
                {role.roleName}
              </Text>
              <Text color="gray.600" fontSize={["md", "lg"]}>
                {role.companyName}
              </Text>
            </Flex>
          </Flex>

          <Text color="gray.900" fontSize={["lg", "2xl"]} flexShrink={0}>
            {role.datesInvolved}
          </Text>
        </Flex>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box ml={[0, 20]} color="black">
            {role.details.map((detail, index) => (
                <Text key={index} fontSize={["md", "lg"]} mt={2}>
                {detail}
                </Text>
            ))}
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  </Box>
);

const Experience = ({ role }: { role: Role }) => {
  const photoSize = [16, 20];

  return (
    <TimelineItem>
        <ExperienceContent role={role} />
    </TimelineItem>
  );
};

const VerticalLine = () => (
<Flex justifyContent="center" alignItems="center">
      <Box
        width="2px"
        height="30px" 
        bg="gray.800"
        position="relative"
        mt={1}
        mb={1}
      />
    </Flex>
);

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ roles }) => {
  return (
    <TimelineRoot maxWidth={"100%"} mt={6} colorPalette={"black"}>
      {roles.map((role, index) => (
        <>
        <Experience key={index} role={role} />
        {index < roles.length - 1 && <VerticalLine />}
        </>
      ))}
    </TimelineRoot>
  );
};

export default ExperienceTimeline;