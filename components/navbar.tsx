import { Box, Highlight, Flex, Text, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const NavbarLink = ({ href, children, active }: {href: string, children: string, active: Boolean}) => {
    return ( 
        <Link href={href}>
          <Text 
            fontWeight="medium"
            fontSize={["lg", "xl"]} 
            color="black"
            >
                { active ?  
                <Highlight
                    query={children}
                    styles={{
                        px: 2,
                        py: 1,
                        color:"#192F6D",
                        bg:"rgba(80, 125, 250, 0.25)",
                        fontWeight: "bold",
                        borderRadius: "md",
                    }}
                >
                {children}
                </Highlight> : children } 
            </Text>
        </Link>
    );
}

export enum Page {
    HOME = "/",
    ABOUT = "/about",
    PROJECTS = "/projects",
}

const Navbar = ({ page }: {page: Page}) => {
    return (
        <Box py={4} px={0}>
            <Flex mx={["2", "10"]} align="center">
                <Flex
                    gap={[2,8]}
                    align="center"
                    flexGrow={[1, 0]} 
                    justify={["space-around", "flex-start"]} 
                >
                    <NavbarLink href="/" active={page == Page.HOME}>home</NavbarLink>
                    <NavbarLink href="/about" active={page == Page.ABOUT}>about me</NavbarLink>
                    <NavbarLink href="/projects" active={page == Page.PROJECTS}>projects</NavbarLink>
                </Flex>

                <Spacer display={["none", "flex"]} /> 

                <Flex
                    gap={[2,8]}
                    align="center"
                    justify={["space-around", "flex-end"]} // Spaced evenly on mobile, right-aligned on desktop
                    flexGrow={[1, 0]} // Same behavior as the first group: equally spaced on mobile
                >
                    <NavbarLink href="/Resume__Andres_Mateo_Ruiz.pdf" active={false}>resume</NavbarLink>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
