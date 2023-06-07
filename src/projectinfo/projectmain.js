// Font Update
import '@fontsource/open-sans/700.css'


import React from 'react';
import {
  ChakraProvider,
  Heading,
  Text,
  Link,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  SimpleGrid,
  Button,
  Center,
  theme,
  Img,
} from '@chakra-ui/react';



// Import Images
import centParkImg from './images/consprkcent.png';
import girlScoutImg from './images/girlscouts.png';
import landTrustImg from './images/landtrust.png';
import nashZeroImg from './images/nash0.png'
import vdsLogoImg from './images/vdslogo.png'



const curProject = [
  { title: 'Centennial Park Conservancy', link: '/centennialpark', image: centParkImg},
  { title: 'Girl Scouts of Middle Tennessee', link: '/girlscouts', image: girlScoutImg},
  { title: 'Geo-spatial Analysis for the Land Trust of Tennessee', link: '/landtrusttn', image:landTrustImg },
  { title: 'Nash0: Striving for Zero Waste', link: '/nash0', image: nashZeroImg },
  { title: 'Ancient Artifacts', link: '/ancientartifacts', image: vdsLogoImg },
  { title: 'Email Assist', link: '/emailassist', image: vdsLogoImg },
];



const pastProject = [
  { title: 'Project 1', link: '/project1', image: vdsLogoImg},
  { title: 'Project 2', link: '/project1', image: vdsLogoImg},
  { title: 'Project 3', link: '/project1', image: vdsLogoImg},
];



const ProjectsMain = () => {
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
                  <Center>
                    <Img
                      src={project.image}
                      borderRadius='lg'
                    />
                  </Center>
                </CardBody>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
    </ChakraProvider>
  );
};

export default ProjectsMain;