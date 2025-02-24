// components/SkillsSection.tsx
import { Box, Grid, Text } from '@chakra-ui/react';
import SkillLevel from './skill_level';

interface Skill {
    name: string;
    level: number;
}

interface SkillsSectionProps {
    title: string;
    skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
    return (
        <Box textAlign="start" color="#332216">
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
                {title}
            </Text>
            <Grid
                templateColumns="repeat(3, 1fr)" // 1 column on mobile, 3 columns on larger screens
                gap={6}
            >
                {skills.map((skill) => (
                    <Box key={skill.name} textAlign="start">
                        <Text fontSize="lg" fontWeight="semibold" mb={2}>
                            {skill.name}
                        </Text>
                        <SkillLevel level={skill.level} />
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default SkillsSection;
