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


const LandTrustPg = () => {
  return (
    <ChakraProvider theme={theme}>
        <Center>
          <Heading borderTopWidth={'15vh'} borderColor = {'white'} as='h1' size='3xl' >
                <Text fontFamily="Inter" fontWeight={'700'}> Geo-spatial Analysis for the Land Trust of Tennessee </Text>
            </Heading>
        </Center>

          <Container maxW='container.lg' fontFamily={'Inter'} fontWeight={'400'} marginTop={'5vh'}>
            <Center>
                <Text fontSize='2xl'>
                The Land Trust of Tennessee aims to understand
                where lands are most likely to convert from
                natural or cultivated farmland to developed is
                important to identifying where to direct
                conservation efforts most efficiently. The goal of this project is to deliver a geospatial raster dataset show the
                likelihood of conversion to developed land cover
                in the area of interest across multiple future
                scenarios (2030, 2040, 2050...).
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

export default LandTrustPg;