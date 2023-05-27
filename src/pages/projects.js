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
  theme,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  SimpleGrid,
  Button
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

const curProject = [
  { title: 'Project 1', link: '/project1' },
  { title: 'Project 2', link: '/project2' },
  { title: 'Project 3', link: '/project3' },
  { title: 'Project 4', link: '/project1' },
  { title: 'Project 5', link: '/project2' },
];

const pastProject = [
  { title: 'Project 1', link: '/project1' },
  { title: 'Project 2', link: '/project2' },
  { title: 'Project 3', link: '/project3' },
  { title: 'Project 4', link: '/project1' },
];

const Projects = () => {
  return (
    <ChakraProvider theme={theme}>
        <Heading as='h1' size='3xl' noOfLines={1}>
            <Text as='u'>Current Projects</Text>
        </Heading>
        <SimpleGrid m={4} spacing={8} templateColumns='repeat(auto-fill, minmax(400px, 2fr))'>
        {curProject.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <Heading size='md'>{project.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>Project description goes here.</Text>
              </CardBody>
              <CardFooter>
                <Button as='a' href={project.link}>View here</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>


        <Heading as='h1' size='3xl' noOfLines={1}>
           <Text as='u'>Past Projects</Text>
        </Heading>
        <SimpleGrid m={4} spacing={8} templateColumns='repeat(auto-fill, minmax(400px, 2fr))'>
        {pastProject.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <Heading size='md'>{project.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>Project description goes here.</Text>
              </CardBody>
              <CardFooter>
                <Button as='a' href={project.link}>View here</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </ChakraProvider>
     
  );
};

export default Projects;