import { React, useRef, useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';
import backgroundImage from '../assets/background/datascience_background5.png'
import backgroundImage2 from '../assets/background/datascience_background1.png'
import logo from '../assets/background/logo.png'

const Links = ['Dashboard', 'Projects', 'Team'];
const NavLink = ({ children }) => (
<Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
    textDecoration: 'underline', 
    bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
</Link>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  return (
    <>
    <Box bg="white.100" px={4} borderBottom={"1px solid #f0ebf1"}>
        <Flex h={16} alignItems="center" justifyContent="space-between" width={"96.22395vw"}>
          <Image src={logo} alt="Logo" h="20vh" mr={8} mt={'2vh'}/> {/* adjust height and margin as needed */}
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>
      </Box>
    <div style={{ marginTop: "0", overflow:"hidden" }}>
      <Image src={backgroundImage} 
             objectFit="cover"
             objectPosition={"center 20%"}
             height={"70vh"}
             width={"98.7239551vw"}
            />
    </div>
    <div style={{ marginBottom: "35vh"}}>
      <Heading size={"s"}>Welcome to the</Heading>
      <Heading>Vanderbilt Data Science Club</Heading>
    </div>
    <Flex>
        <Box width={"45vw"} display="flex" justifyContent="center">
          <Image
            ref={ref}
            src={backgroundImage2}
            fallbackSrc="https://via.placeholder.com/150"
            opacity={isVisible ? 1 : 0}
            transition="opacity 1s ease-in-out"
            objectFit={"cover"}
            height={"40vh"}
          />
        </Box>
        <Box width={"45vw"} 
             display="flex" 
             justifyContent="center" 
             flexDirection="column" 
             alignItems="center"
             ref={ref}
             opacity={isVisible ? 1 : 0}
             transition="opacity 1s ease-in-out">
          <Heading size={'lg'}>Our Mission</Heading>
          <Text>Vanderbilt Data Science aims to empower students from all experience levels to learn data science, artificial intelligence (AI), and machine learning (ML) through a project-based approach in which students will be able to have hands-on experience with real data while speaking with experienced industry professionals. Our goal is to become a community that encourages and actively promotes the learning of data science within and outside the classroom environment.</Text>
        </Box>
      </Flex>
      <Box height={"100vh"} bgColor={'white'}></Box>
    </> 
  );
} 
