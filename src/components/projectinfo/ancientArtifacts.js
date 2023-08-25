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

const AncientArtifactsPg = () => {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Heading p={10} as="h1" size="3xl" marginTop="150px">
          <Text fontFamily="Open Sans"> Ancient Artifacts</Text>
        </Heading>
      </Center>

      <Container maxW="container.lg" marginBottom={333}>
        <Center>
          <Text fontSize="2xl">
            The purpose of the whole project is to identify the location of
            ancient stone tool manufacturing areas and to understand the public
            structures and daily community interactions in the small Mayan site
            of Nacimiento in the Petexbatun region of Guatemala during the 7th
            and 8th centuries. Our team is trying to understand our
            stakeholder's models better and make everyone on the same page, and
            to make improvements to the existing models.
          </Text>
        </Center>
      </Container>
    </ChakraProvider>
  );
};

export default AncientArtifactsPg;
