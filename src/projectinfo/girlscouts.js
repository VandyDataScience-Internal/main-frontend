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


const GirlScoutsPg = () => {
  return (
    <ChakraProvider theme={theme}>
        <Center>
          <Heading p={10} as='h1' size='3xl' >
                <Text fontFamily="Open Sans"> Girl Scouts of Middle Tennessee </Text>
            </Heading>
        </Center>

          <Container maxW='container.lg'>
            <Center>
                <Text fontSize='2xl'>
                Girl Scouts of America is a nonprofit organization that offers a
                variety of programs, activities, and events for all girls in grades
                K-12. They create a larger community that is committed to
                success and empowering girls around the world. Girl Scouts of
                Middle Tennessee, our local chapter, currently serves 39
                counties and over 11,000 girls.

                The Girl Scouts rely on grants
                and donors for funding, but
                obtaining these types of
                funding is challenging because
                they often require proof of
                specific demographic criteria.

                For instance, a grant may require the Girl Scouts to prove they
                are using the funds to benefit Latina girls ages 4-10 in Davidson
                county. However, the Girl Scouts currently cannot visualize and
                display their data, which makes grant applications, attracting
                donors, and targeted marketing difficult and inefficient.
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

export default GirlScoutsPg;