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


const AncientArtifactsPg = () => {
  return (
    <ChakraProvider theme={theme}>
        <Center>
          <Heading p={10} as='h1' size='3xl' >
                <Text fontFamily="Open Sans"> Ancient Artifacts</Text>
            </Heading>
        </Center>

          <Container maxW='container.lg'>
            <Center>
                <Text fontSize='2xl'>
                The purpose of the whole project is to identify the
                location of ancient stone tool manufacturing areas
                and to understand the public structures and daily
                community interactions in the small Mayan site of
                Nacimiento in the Petexbatun region of Guatemala
                during the 7th and 8th centuries.
                Our team is trying to understand our stakeholder's
                models better and make everyone on the same
                page, and to make improvements to the existing
                models.
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

export default AncientArtifactsPg;