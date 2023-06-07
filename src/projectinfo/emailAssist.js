// Font Update
import '@fontsource/open-sans/700.css'

import React from 'react';
import {
  ChakraProvider,
  Heading,
  Box,
  Text,
  theme,
  Card, 
  CardBody, 
  Center, 
  Image,
  Container,
  Stack,
  StackDivider,
} from '@chakra-ui/react';


const EmailAssistPg = () => {
  return (
    <ChakraProvider theme={theme}>
        <Center>
          <Heading p={10} as='h1' size='3xl' >
                <Text fontFamily="Open Sans"> Email Assist</Text>
            </Heading>
        </Center>

          <Container maxW='container.lg'>
            <Center>
                <Text fontSize='2xl'>
                  We are making an Email Tool to help people with cognitive disabilities. Email already has issues, and these problems are likely worse for those with cognitive disabilities.
                </Text>
            </Center>
          </Container>

        <Center>
          <Heading pt={100} as='h1' size='2xl' >
              <Text fontFamily="Open Sans"> Meet the Team</Text>
          </Heading>
        </Center>
        <Center p={10}>
          <Image
                borderRadius='full'
                boxSize='150px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
            />
        </Center>

        <Center pb={10}>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='sm' textTransform='uppercase'>
                    Engineering Manager
                  </Heading>
                  <Text pt='2' fontSize='md'>
                    Adaline Adaline, 
                    John
                  </Text>
                </Box>
                <Box>
                  <Heading size='sm' textTransform='uppercase'>
                    Product Manager
                  </Heading>
                  <Text pt='2' fontSize='md'>
                    Adaline Adaline
                  </Text>
                </Box>
                <Box>
                  <Heading size='sm' textTransform='uppercase'>
                    Developer
                  </Heading>
                  <Text pt='2' fontSize='md'>
                    Adaline Adaline
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Center>

          
          
      
    </ChakraProvider>
  );
};

export default EmailAssistPg;
