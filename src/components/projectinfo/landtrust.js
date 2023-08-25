// Font Update
import '@fontsource/open-sans/700.css';

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
        <Heading p={10} as="h1" size="3xl" marginTop="150px">
          <Text fontFamily="Open Sans">
            {' '}
            Geo-spatial Analysis for the Land Trust of Tennessee{' '}
          </Text>
        </Heading>
      </Center>

      <Container maxW="container.lg" marginBottom="270px">
        <Center>
          <Text fontSize="2xl">
            The Land Trust of Tennessee aims to understand where lands are most
            likely to convert from natural or cultivated farmland to developed
            is important to identifying where to direct conservation efforts
            most efficiently. The goal of this project is to deliver a
            geospatial raster dataset show the likelihood of conversion to
            developed land cover in the area of interest across multiple future
            scenarios (2030, 2040, 2050...).
          </Text>
        </Center>
      </Container>
    </ChakraProvider>
  );
};

export default LandTrustPg;
