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


const CentParkPg = () => {
  return (
    <ChakraProvider theme={theme}>
        <Center>
          <Heading borderTopWidth={'15vh'} borderColor = {'white'} as='h1' size='3xl' >
                <Text fontFamily="Inter" fontWeight={'700'}> Centennial Park Conservancy</Text>
            </Heading>
        </Center>

          <Container maxW='container.lg' fontFamily={'Inter'} fontWeight={'400'} marginTop={'5vh'}>
            <Center>
                <Text fontSize='2xl'>
                  The Centennial Park Conservancy is a non-profit organization that collaborates with Metro Parks in order to preserve and enhance the Parthenon and Centennial Park. The Conservancy is dedicated to presenting accessible and inclusive programming, which they actively share with their community and visitors. However, the organization is currently facing challenges in comprehending and effectively utilizing the data gathered from their Google survey. This data plays a crucial role in informing their work.
                  In order to improve the functionality of the Conservancy, a strategic decision was made by a dedicated team to develop a comprehensive dashboard. This dashboard aims to harness multiple data points obtained from the survey to address the key inquiries raised by the stakeholders. By visualizing the data in a structured manner, the Conservancy will be able to discern and comprehend the findings more accurately and effortlessly. This approach will facilitate a better understanding of the data, ultimately aiding the Conservancy in their mission.
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

export default CentParkPg;