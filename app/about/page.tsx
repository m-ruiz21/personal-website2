"use client"
import Image from 'next/image';
import { Box, Text, Heading } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import { Page } from '@/components/navbar';
import SkillsSection from './skill_section';
import { Grid } from '@chakra-ui/react';
import FadeIn from '@/components/fade_in';
import ExperienceTimeline from './experience_timeline';
import type { Role } from './experience_timeline';

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

const roles : Role[] = [
  {
    companyImage: '/microsoft.png',
    companyName: 'Microsoft',
    roleName: 'SWE Intern',
    datesInvolved: 'May 2024 - Aug 2024',
    details: [
        '12 week internship working on the Unified Security Operations Center (1SOC) team.',
        'In that time, I pioneered the first Copilot features in Microsoft Sentinel by building and optimizing Retrieval Augmented Generation (RAG) pipelines. Doing so required me leading cross-functional collaboration with two international teams and Microsoft R&D to establish key development guidelines.',
        'Additionally, while talking to the research team, I realized there was an opportunity to improve the current Copilot skill development process. As a result, I took the initiative to create an automated testing system that leveraged advances in automated fact-checking and natural language processing, reducing skill evaluation time by 97% and increasing monitoring accuracy by 42%.'
    ],
  },
  {
    companyImage: '/tamuhack.svg',
    companyName: 'TAMUHack',
    roleName: 'Tech Director',
    datesInvolved: 'Apr 2022 - May 2024',
    details: ['Developed tools supporting some of Texas’ largest student-run hackathons, including four event websites (HowdyHack 2022 - TAMUhack 2024) and an AI-censored Spotify Queue.', 'To do so, I utilized technologies like Vue.js, SvelteKit, Next.js, and PostgreSQL to drive these projects. During the events, I actively mentored participants and managed technical challenges during hackathons, supporting the success of each event.'],
  },
  {
    companyImage: '/tamu.jpeg',
    companyName: 'Texas A&M University',
    roleName: 'Teaching Assistant',
    datesInvolved: 'Jan 2023 - Jan 2024',
    details: ['Assisted Dr. Martin Carlisle, Dr. Shawn Lupoli, and Dr. Jeff Huang with their CSCE 222 (Discrete Structures of Computing) course sections made up of 210+ total students.', 'As part of my responsibilities, I held biweekly office hours, graded assignments, and held study sessions.']
  },
  {
    companyImage: '/microsoft.png',
    companyName: 'Microsoft',
    roleName: 'SWE Intern',
    datesInvolved: 'May 2023 - Aug 2023',
    details: ['12 week internship with the Microsoft Sentinel team.',
    'Led the development and testing efforts for the React migration of the Continuous Integration feature in Microsoft Sentinel.',
    'My project also included a backend portion, where I refactored API controllers and implemented an automated Service Principal rotation service in preparation for general availability (GA).', 
    'Additionally, I realized the onboarding process was timely and tedious, so I created a script to maintain repository dependencies as code, reducing developer onboarding time by 80%. As a result, the script has now been adopted accross other teams and repositories as well.'],
  },
  {
    companyImage: '/microsoft.png',
    companyName: 'Microsoft',
    roleName: 'Explore Intern (PM + SWE)',
    datesInvolved: 'May 2022 - Aug 2022',
    details: ['Completed a 12-week internship focused on building a serverless automation tool for Microsoft Sentinel.', 
    'Led the backend development using Azure Durable Functions, Cosmos DB, and the Twilio API.', 'Furthermore, as part of the PM portion of my internship, I conducted product research and competitive analysis to create customer personas, mock-ups, and product specifications.'],
  } 
];

const education: Role[] = [
  {
    companyImage: '/tamu.jpeg',
    companyName: 'Texas A&M University',
    roleName: 'B.S. in Computer Engineering',
    datesInvolved: 'Aug 2020 - Dec 2024',
    details: [
        "Honors: Cum Laude",
        "GPA: 3.67 / 4.0", 
        "Awards: National Hispanic Merit Scholar, Raymond Ideas Challenge Finalist", 
        "Relevant Coursework: Recommendation Systems and Natural Language processing, Machine Learning, Cloud Computing, Programming Languages"],
  }
]

const About = () => {
    return (
        <>
            <Navbar page={Page.ABOUT} />
            <div className="flex flex-col items-center sm:py-10">
                <div className="w-full md:w-7/8 xl:w-3/4 mx-auto p-6">
                    <Box className="text-center mb-8">
                        <Heading as="h1" fontSize={["6xl", "8xl"]} className="text-[#332216] font-bold">
                            I’m Mateo.
                        </Heading>
                    </Box>
                    <FadeIn delay={250} transitionDuration={600}>
                        <div className="flex flex-col lg:flex-row items-center">
                            <Box className="mb-8 lg:mb-0 lg:mr-8 w-full lg:w-1/3 flex justify-center">
                                <Image
                                    src="/me.jpeg"
                                    alt="Mateo Ruiz"
                                    width={300}
                                    height={400}
                                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-xl overflow-hidden"
                                />
                            </Box>

                            <Box className="w-full lg:w-3/4 text-left">
                                <Text fontSize={["3xl", "5xl"]} className="text-[#332216]">
                                    I am a{' '}
                                    <span className="text-[#59772F] font-semibold">Software Developer</span>{' '}
                                    with a diverse and dynamic skill set
                                </Text>
                                <Text fontSize={["lg", "xl"]} className="text-[#332216] font-semibold mt-4 leading-7">
                                    Over the last 12 years, I’ve gone from scavenging Radio Shack for small Arduino projects
                                    to gaining hands-on experience with cloud-native systems, full-stack development, and
                                    AI-driven applications. 
                                </Text>
                                <Text fontSize={["lg", "xl"]} className="text-[#332216] font-semibold mt-4 leading-7">
                                    These days, I'm working with Microsoft as a Software Engineer, building scalable, AI-powered security tools that help teams detect threats, respond faster, and effectively protect large-scale critical cloud systems.
                                </Text>
                            </Box>
                        </div>
                        
                        <Text fontSize={["3xl", "5xl"]} className="text-[#332216] font-[600] mt-8 sm:mt-16">
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
                        
                        <Text fontSize={["3xl", "5xl"]} className="text-[#332216] font-[600] mt-8 sm:mt-16">
                            My experiences
                        </Text>
                        <ExperienceTimeline roles={roles} /> 
                        
                        <Text fontSize={["3xl", "5xl"]} className="text-[#332216] font-[600] mt-8 sm:mt-16">
                            My education 
                        </Text>
                        <ExperienceTimeline roles={education} /> 
                        </FadeIn>
                    </div>
            </div>
        </>
    );
};

export default About;
