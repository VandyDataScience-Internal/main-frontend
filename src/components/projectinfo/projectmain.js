// Font Update
import '@fontsource/open-sans/700.css';

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
import centParkImg from '../../assets/images/consprkcent.png';
import girlScoutImg from '../../assets/images/girlscouts.png';
import landTrustImg from '../../assets/images/landtrust.png';
import nashZeroImg from '../../assets/images/nash0.png';
import aalogo from '../../assets/images/ancient-artifacts-logo.png';
import ealogo from '../../assets/images/emailAssistLogo.png';

const pastProject = [
  {
    title: 'Centennial Park Conservancy',
    link: '/Projects/centennialpark',
    image: centParkImg,
  },
  {
    title: 'Girl Scouts of Middle Tennessee',
    link: '/Projects/girlscouts',
    image: girlScoutImg,
  },
  {
    title: 'Geo-spatial Analysis for the Land Trust of Tennessee',
    link: '/Projects/landtrusttn',
    image: landTrustImg,
  },
  {
    title: 'Nash0: Striving for Zero Waste',
    link: '/Projects/nash0',
    image: nashZeroImg,
  },
  {
    title: 'Ancient Artifacts',
    link: '/Projects/ancientartifacts',
    image: aalogo,
  },
  { title: 'Email Assist', link: '/Projects/emailassist', image: ealogo },
];

const ProjectsMain = () => {
  return (
    <ChakraProvider theme={theme}>
      <Heading m={10} as="h1" size="3xl">
        <Center>
          <Text fontFamily="Open Sans">Current Projects</Text>
        </Center>
      </Heading>
      <Center>
        <Text fontFamily="Open Sans">Coming soon!</Text>
      </Center>

      <Heading m={10} as="h1" size="3xl">
        <Center>
          <Text fontFamily="Open Sans">Past Projects</Text>
        </Center>
      </Heading>
      <SimpleGrid
        m={10}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 2fr))"
      >
        {pastProject.map((project, index) => (
          <Link href={project.link} _hover={{ textDecoration: 'none' }}>
            <Card key={index} height="100%">
              <CardHeader>
                <Heading size="md">{project.title}</Heading>
              </CardHeader>
              <Center>
                <CardBody mt={-5}>
                  <Center>
                    <Img src={project.image} borderRadius="lg" />
                  </Center>
                </CardBody>
              </Center>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default ProjectsMain;
