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

const EmailAssistPg = () => {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Heading p={10} as="h1" size="3xl" marginTop="150px">
          <Text fontFamily="Open Sans"> Email Assist</Text>
        </Heading>
      </Center>

      <Container maxW="container.lg" marginBottom="440px">
        <Center>
          <Text fontSize="2xl">
            We are making an Email Tool to help people with cognitive
            disabilities. Email already has issues, and these problems are
            likely worse for those with cognitive disabilities.
          </Text>
        </Center>
      </Container>
    </ChakraProvider>
  );
};

export default EmailAssistPg;
