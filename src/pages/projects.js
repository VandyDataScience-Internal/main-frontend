// Font Update
import '@fontsource/open-sans/700.css'

import React from 'react';
import {
  ChakraProvider,
  Heading,
  Box,
  Text,
  Link,
  VStack,
  Wrap,
  WrapItem,
  Code,
  Grid,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  SimpleGrid,
  Button,
  Center,
  extendTheme,
  Container,
  theme,
  Stack,
  Image,
  Img,
} from '@chakra-ui/react';

// Import Images
import centParkImg from './projectinfo/images/consprkcent.png';
import girlScoutImg from './projectinfo/images/girlscouts.png';
import landTrustImg from './projectinfo/images/landtrust.png';

const curProject = [
  { title: 'Centennial Park Conservancy', link: '/project1' , image: centParkImg},
  { title: 'Girl Scouts of Middle Tennessee', link: '/project2', image: girlScoutImg},
  { title: 'Geo-spatial Analysis for the Land Trust of Tennessee', link: '/project3', image:landTrustImg },
  { title: 'Nash0, Striving for Zero Waste', link: '/project1', image: landTrustImg },
  { title: 'Ancient Artifacts', link: '/project2', image:landTrustImg },
  { title: 'Email Assist', link: '/project2', image:landTrustImg },
];

const pastProject = [
  { title: 'Project 1', link: '/project1' },
  { title: 'Project 2', link: '/project1' },
  { title: 'Project 3', link: '/project1' },
];

const Projects = () => {
  return (
    <ChakraProvider theme={theme}>
        <Heading m={10} as='h1' size='3xl'>
            <Center>
              <Text fontFamily="Open Sans">Current Projects</Text>
            </Center>
        </Heading>
        <SimpleGrid m={10} spacing={10} templateColumns='repeat(auto-fill, minmax(400px, 2fr))'>
         {curProject.map((project, index) => (
            <Link href={project.link} _hover={{ textDecoration: 'none' }}>
              <Card key={index} height="100%" >
                <CardHeader>
                  <Heading size='md'>{project.title}</Heading>
                </CardHeader>
                <Center>
                  <CardBody mt={-5}>
                    <Center>
                      <Img
                        src={project.image}
                        borderRadius='lg'
                      />
                    </Center>
                  </CardBody>
                </Center>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
        <Heading m={10} as='h1' size='3xl'>
            <Center>
              <Text fontFamily="Open Sans">Past Projects</Text>
            </Center>
        </Heading>
        <SimpleGrid m={10} spacing={10} templateColumns='repeat(auto-fill, minmax(400px, 2fr))'>
         {pastProject.map((project, index) => (
            <Link href={project.link} _hover={{ textDecoration: 'none' }}>
              <Card key={index}>
                <CardHeader>
                  <Heading size='md'>{project.title}</Heading>
                </CardHeader>
                <CardBody mt={-5}>
                <Img
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                </CardBody>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
    </ChakraProvider>
  );
};

export default Projects;