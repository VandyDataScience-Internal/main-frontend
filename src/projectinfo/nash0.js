// Font Update
import '@fontsource/open-sans/700.css'

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
  Fade,
  Circle,
  SimpleGrid,
  Container,
  Stack,
  StackDivider,
} from '@chakra-ui/react';


const NashZeroPg = () => {
  return (
    <ChakraProvider theme={theme}>
        <Center>
          <Heading p={10} as='h1' size='3xl' >
                <Text fontFamily="Open Sans"> Nash0, Striving for Zero Waste </Text>
            </Heading>
        </Center>

          <Container maxW='container.lg'>
            <Center>
                <Text fontSize='2xl'>
                In 2017, Nashville Public Works initiated a Zero Waste plan to minimize the amount of waste generated in Nashville, and maximize the recycling and reuse of recyclable materials. The term “zero waste” refers to the objective of diverting 90% of materials from landfills, and instead, viewing waste as a resource to be recycled, reduced, reused, composted, or converted to other biomaterials such as fuel. The goal of this project is to create a visualization dashboard of predictions on carbon emissions to provide insights for industries and governors. 
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

export default NashZeroPg;