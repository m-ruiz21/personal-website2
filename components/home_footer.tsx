import { Flex, Image, Link } from "@chakra-ui/react";

const HomeFooter = () => { 
    const photoSize = [8, 10];
    return (
        <Flex as="footer" py={4} justify="center" mt="auto" mb="3">
            <Link href="https://github.com/m-ruiz21" mx={3}>
                <Image src="/github-logo.png" alt="GitHub" width={photoSize} height={photoSize} />
            </Link>
            <Link href="https://linkedin.com/in/amruiz" mx={3}>
                <Image src="/linkedin-logo.png" alt="Linkedin" width={photoSize} height={photoSize} />
            </Link>
        </Flex>
    );
};

export default HomeFooter;
