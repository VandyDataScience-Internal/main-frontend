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
import blogPageOne from '../../assets/newsletters/3_31_23.png';
import blogPageTwo from '../../assets/newsletters/10_1_22.png';

const blogs = [
  {
    title: 'October 1st, 2022 Newsletter',
    link: '/blogPageOne',
    image: blogPageOne,
  },
  {
    title: 'March 31st, 2023 Newlstter',
    link: '/blogPageTwo',
    image: blogPageTwo,
  },
];

const ProjectsMain = () => {
  return (
    <ChakraProvider theme={theme}>
      <Heading m={10} as="h1" size="3xl">
        <Center>
          <Text fontFamily="Open Sans">Our Blogs</Text>
        </Center>
      </Heading>
      <SimpleGrid
        m={10}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(400px, 2fr))"
      >
        {blogs.map((project, index) => (
          <Link href={project.link} _hover={{ textDecoration: 'none' }}>
            <Card key={index} height="100%">
              <CardHeader>
                <Heading size="md">{project.title}</Heading>
              </CardHeader>
              <Center>
                <CardBody mt={-5}>
                  <Center>
                    <Img src={project.image} borderRadius="lg" height={400}/>
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
