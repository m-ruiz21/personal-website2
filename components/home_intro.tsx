import { Box, Text, Highlight } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import FadeIn from "./fade_in";

const HomeIntro = () => {
  return (
    <Box textAlign="left" my={10} px={5}>
        <Text 
            fontSize={["3xl", "5xl"]} 
            fontWeight="light" 
            mb={4}
        >
            Howdy! I’m{" "}
            <Highlight
                query="Mateo Ruiz"
                styles={{
                    px: 2,
                    py: 1,
                    color:"#192F6D",
                    bg:"rgba(80, 125, 250, 0.25)",
                    fontWeight: "bold",
                    borderRadius: "md",
                }}
            >
              Mateo Ruiz
            </Highlight>
        </Text>
        <FadeIn delay={750} transitionDuration={500}>
            <Box 
                display="flex" 
                alignItems="center" 
                fontSize={["2xl","4xl"]} 
                fontWeight="light"
            >
                <Text as="span" fontWeight="light">
                    I am a {" "}
                </Text>

                <Box as="span" fontWeight="500" ml={2}>
                    <Typewriter
                        options={{
                          strings: ['software developer', 'coffee lover', 'foodie'],
                          autoStart: true,
                          loop: true,
                        }}
                    />
                </Box>
             </Box>
        </FadeIn>
    </Box>
  );
};

export default HomeIntro;
