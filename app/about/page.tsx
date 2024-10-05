// pages/about.js
"use client"
import Image from 'next/image';
import { Box, Text, Heading } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import { Page } from '@/components/navbar';
import SkillsSection from './skill_section';
import { Grid } from '@chakra-ui/react';
import FadeIn from '@/components/fade_in';
import ExperienceTimeline from './experience_timeline';

interface Skill {
    name: string;
    level: number;
}

const programmingLanguages: Skill[] = [
    { name: 'Typescript', level: 5 },
    { name: 'C#', level: 5 },
    { name: 'Python', level: 5 },
    { name: 'Rust', level: 4 },
    { name: 'C++', level: 4 },
    { name: 'Java', level: 4 },
    { name: 'C', level: 3 },
    { name: 'PHP', level: 3 },
    { name: 'Haskell', level: 3 },
];

const frameworks: Skill[] = [
    { name: 'ASP.NET', level: 5 },
    { name: 'React', level: 5 },
    { name: 'Next.js', level: 5 },
    { name: 'TailwindCSS', level: 5 },
    { name: 'Vue.js', level: 4 },
    { name: 'Svelte', level: 3 },
    { name: 'Laravel', level: 3 },
];

const roles = [
  {
    companyImage: '/images/company1.png',
    companyName: 'Company A',
    roleName: 'Software Engineer',
    timeInvolved: 'Jan 2020 - Present',
    details: 'Worked on developing scalable web applications and microservices.',
  },
  {
    companyImage: '/images/company2.png',
    companyName: 'Company B',
    roleName: 'Frontend Developer',
    timeInvolved: 'Mar 2018 - Dec 2019',
    details: 'Built responsive user interfaces using React, Redux, and Tailwind CSS.',
  },
  {
    companyImage: '/images/company3.png',
    companyName: 'Company C',
    roleName: 'Backend Developer',
    timeInvolved: 'Jan 2016 - Feb 2018',
    details: 'Worked on RESTful APIs, databases, and server-side architecture.',
  },
];

const About = () => {
    return (
        <>
            <Navbar page={Page.ABOUT} />
            <div className="flex flex-col items-center py-10">
                {/* Main container */}
                <div className="w-full md:w-3/4 mx-auto p-6">
                    {/* Heading Section */}
                    <Box className="text-center mb-8">
                        <Heading as="h1" fontSize={["6xl", "8xl"]} className="text-gray-900 font-bold">
                            I’m Mateo
                        </Heading>
                    </Box>
                    <FadeIn delay={250} transitionDuration={600}>
                        <div className="flex flex-col md:flex-row items-center">
                            <Box className="mb-8 md:mb-0 md:mr-8 w-full md:w-1/3 flex justify-center">
                                <Image
                                    src="/me.png"
                                    alt="Mateo Ruiz"
                                    width={300}
                                    height={400}
                                    className="rounded-xl"
                                />
                            </Box>

                            <Box className="w-full md:w-3/4 text-left">
                                <Text fontSize={["3xl", "5xl"]} className="text-gray-900">
                                    I am a{' '}
                                    <span className="text-blue-600 font-semibold">Software Developer</span>{' '}
                                    with a diverse and dynamic skill set
                                </Text>
                                <Text fontSize={["lg", "xl"]} className="text-gray-800 mt-4 leading-7">
                                    Over the last 12 years, I’ve gone from scavenging Radio Shack for small Arduino projects
                                    to gaining hands-on experience with cloud-native systems, full-stack development, and
                                    AI-driven applications.
                                </Text>
                                <Text fontSize={["lg", "xl"]} className="text-gray-800 mt-4 leading-7">
                                    These days, I’m waiting to graduate with honors in December 2024 with my B.S. in Computer
                                    Engineering from Texas A&M University.
                                </Text>
                            </Box>
                        </div>
                        
                        <Text fontSize={["3xl", "5xl"]} className="text-gray-900 font-[600] mt-16">
                            My skills 
                        </Text>
                        <Grid
                            templateColumns={['1fr', 'repeat(2, 1fr)']} // 1 column on mobile, 2 columns on larger screens
                            gap={10}
                            mt={3}
                        >
                            <SkillsSection title="Programming languages" skills={programmingLanguages} />
                            <SkillsSection title="Frameworks" skills={frameworks} />
                        </Grid>
                        
                        <Text fontSize={["3xl", "5xl"]} className="text-gray-900 font-[600] mt-16">
                            My experiences
                        </Text>
                        <ExperienceTimeline roles={roles} />

                        </FadeIn>
                    </div>
            </div>
        </>
    );
};

export default About;
