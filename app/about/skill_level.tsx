import { Box, Flex } from '@chakra-ui/react';

const SkillLevel = ({ level } : {level: number}) => {
    const totalLevels = 5; 
    const filledBlocks = Array(level).fill(true) 
    const unfilledBlocks = Array(totalLevels - level).fill(false); 

    return (
        <Flex>
            {filledBlocks.map((_, index) => (
                <Box
                    key={`filled-${index}`}
                    width="12px" // Adjusted to make it wider
                    height="24px" // Adjusted to make it shorter
                    bg="black"
                    borderRadius="4px" // Add corner radius to curve the boxes
                    mr={1}
                />
            ))}
            {unfilledBlocks.map((_, index) => (
                <Box
                    key={`unfilled-${index}`}
                    width="12px" // Same width as filled blocks
                    height="24px" // Same height as filled blocks
                    bg="transparent"
                    border="2px solid black"
                    borderRadius="4px" // Add corner radius to curve the boxes
                    mr={1}
                />
            ))}
        </Flex>
    );
};

export default SkillLevel;
