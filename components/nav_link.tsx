// components/NavLink.js
import { useRouter } from 'next/router';
import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

const NavLink = ({ href, children, isActive } : {href: string, children: ReactNode, isActive: Boolean}) => {
  
  return (
    <Link href={href} passHref>
      <ChakraLink
        className={`nav-link ${isActive ? 'active' : ''}`}
        fontSize={["md", "lg"]}
        p={2}
        rounded="lg"
        _hover={{ bg: 'rgba(80, 125, 250, 0.25)' }} // Update hover background color
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
