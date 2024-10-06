import { Box, Heading, Text } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import { Page } from '@/components/navbar';
import FadeIn from '@/components/fade_in';
import ProjectTimeline from './projects_timeline';


const projects = [
    {
        projectName: "SPOT - AI Guide Dog",
        time: "January 2024 - May 2024",
        link: "https://github.com/m-ruiz21/SPOT", 
        tools: ["Rust", "Python", "C++"],
        details: [
            "I led a team to develop an open-source AI robot aimed at serving as an affordable mobility aid for the blind.",
            "Our robot demonstrated an impressive ability to navigate its environment, achieving a reaction time twice as fast as humans and a 99.7% success rate.",
            "As part of the project I wrote the driving code in Python and a Rust-based traversal library that implemented an optimized A* algorithm on a Gaussian grid.",
            "I was also heavily involved in efforts for the 3D prototying and C++ interface.",
        ]
    },
    {
        projectName: "Conversational Recommender System for Spotify",
        time: "August 2023 - December 2023",
        link: "", 
        tools: ["Python", "Next.js", "PostgreSQL"],
        details: [
        "This project focused on creating a Conversational Recommendation engine inspired by Google Research, leveraging technologies such as Python, Next.js, and PostgreSQL.", "The engine incorporated GPT, few-shot prompting, word embeddings, and natural language profiles to manage conversations, reduce hallucinations, and provide personalized, relevant recommendations through the Spotify recommendation engine."
        ]
    },
    {
        projectName: "TAMUhack X Website",
        time: "December 2023 - Febuary 2024",
        link: "https://x.tamuhack.org", 
        tools: ["Svelte.js, Tailwind CSS"],
        details: [
        "Aided in the development of the TAMUhack X website, our tenth anniversary hackathon" 
        ]
    },
    {
        projectName: "Restaurant Point of Sales (PoS) System",
        time: "March 2023 - May 2023",
        link: "https://github.com/m-ruiz21/project3_pi", 
        tools: ["Python", "Next.js", "PostgreSQL"],
        details: [
        "For this project, I developed an API to handle all Point of Sale responsibilities for a restaurant, with support for Role-Based Access Control (RBAC) using OAuth and store trend analytics..","Additionally, I created a customer-facing interface using Vue.js and deployed the project on two Azure Web App environments with GitHub Actions for continuous integration and deployment."
        ]
    },
    {
        projectName: "AI Playlist Generator",
        time: "October 2023 - December 2023",
        link: "https://github.com/m-ruiz21/SpotifyRecommender", 
        tools: ["Python", "Next.js", "TailwindCSS"],
        details: [
            "A project that allowed users to generate custom playlists by providing a playlist name. It leverages Spotify's recommendation service, translating user input into Spotify's 'Song Features' to offer personalized recommendations.", "The system uses a BERT model fine-tuned for regression on these Song Features, trained on around 10,000 playlists scrapped using Azure Function proxies. The model is then deployed to a Flask API which communicates with the front-end interface is built with Next.js, Tailwind, and TypeScript.","Note: github link includes video demo and design document!"
        ]
    },
    {
        projectName: "TAMUhack 2023 Website",
        time: "December 2022 - Febuary 2022",
        link: "https://tamuhack.org/th/2023", 
        tools: ["Vue.js", "Tailwind CSS"],
        details: [
            "Helped create page for the TAMUhack 2023 event, one of the largest annual hackathons in Texas."
        ]
    },
    {
        projectName: "Aggie Shell",
        time: "December 2022",
        link: "https://github.com/m-ruiz21/aggie_shell", 
        tools: ["Rust", "Systems Development"],
        details: [
        "Linux shell built with Rust. Used along side tutorial as a bonus assignment for my Computer Systems course.", 
        "The shell is able to run basic commands, built-in shell commands like cd, piping, and file output redirection."
        ]
    },
    {
        projectName: "HowdyHack 2022 Website",
        time: "June 2022 - October 2022",
        link: "https://tamuhack.org/hh/2023", 
        tools: ["Vue.js", "Tailwind CSS"],
        details: [
            "Helped create page for the Howdy Hack 2022 event, our themed hackathon in the fall semester, created for Aggies by Aggies."
        ]
    },
    {
        projectName: "Multithreaded C++ TCP Server",
        time: "September 2022",
        link: "", 
        tools: ["C++", "Docker"],
        details: [
        "Created a multithreaded TCP server and client using C++ to request and receive user ECG data.", 
        "I later dockerized the server and implemented a spoofing attack intercept to secure packet transmissions."
        ]
    },
    {
        projectName: "Rust Text Editor",
        time: "August 2022",
        link: "https://github.com/m-ruiz21/pound", 
        tools: ["Rust"],
        details: [
        "Rust port of the kilo command-line text editor by antirez.",
        "Allows for basic text opening and editing using a vim-like interface and file saving."
        ]
    },
    {
        projectName: "vRun - Verilog CLI tool",
        time: "Febuary 2021",
        link: "", 
        tools: ["Bash", "Verilog"],
        details: [
        "Faced with the problem of getting Verilog wave forms in wsl, I created a quick bash script to help me and my classmates manage, run, and view of Verilog scripts and their waveforms more easily."
        ,"Includes documentation and set up instructions."
        ]
    },
    {
        projectName: "Movie Search App",
        time: "June 2021",
        link: "https://github.com/m-ruiz21/capital_one_challenge", 
        tools: ["Next.js", "TailwindCSS"],
        details: [
        "Movie Search App using OMDb API as part of my successful application to the Capital One Software Engineering Summit."
        ]
    },

]
const Projects = () => {
    return (
        <>
            <Navbar page={Page.PROJECTS} />
            <div className="flex flex-col items-center sm:py-10">
                <div className="w-full md:w-3/4 mx-auto p-6">
                    <Box className="text-center mb-8">
                        <Heading as="h1" fontSize={["6xl", "8xl"]} className="text-gray-900 font-bold">
                            My Projects.
                        </Heading>
                    </Box>
                    <FadeIn delay={250} transitionDuration={600}>
                        <Text fontSize={["lg", "xl"]} className="text-center text-gray-800 mt-4 leading-7">
                            Here are some of the projects I've worked on over the years.                        
                        </Text>
                    <ProjectTimeline projects={projects}/>
                    </FadeIn>
                    </div>
            </div>
        </>
    );
};

export default Projects;
