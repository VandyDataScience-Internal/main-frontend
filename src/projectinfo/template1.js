import React from 'react';
import {
  ChakraProvider,
  Heading,
  Box,
  Text,
  VStack,
  theme,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Center, 
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

const ProjectTemplate = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing='30px'>
          <Heading as='h1' size='1xl' noOfLines={1}>
              <Text as='u'> </Text>
          </Heading>
          <Heading as='h1' size='4xl' noOfLines={1}>
              <Center>
                <Text as='u'>Project Name</Text>
              </Center>
          </Heading>
          <Box boxSize='sm' spacing={8}>
            <Center>
              <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            </Center>
            <Center>
              <Text fontSize='xl'> PM, EM, Devs </Text>
            </Center>
          </Box>
          <Card>
            <CardBody>
                <Text>Here is the description of the project. </Text>
            </CardBody>
          </Card>
      </VStack>
    </ChakraProvider>
  );
};

export default ProjectTemplate;