import React from 'react';
import {
  ChakraProvider,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Heading,
  extendTheme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      "chakra-body-text": {
        _light: "#1e1b11",
        _dark: "#1e1b11",
      },
      "chakra-body-bg": {
        _light: "#fee893",
        _dark: "#fee893",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
<<<<<<< Updated upstream
      <Flex minWidth="max-content" alignItems="center" textAlign="center" fontSize="xl">
          <VStack spacing={8}>
            <Heading>VDS</Heading>
          </VStack>    
          <ColorModeSwitcher justifySelf="flex-end" />
=======
      <Flex textAlign="center" fontSize="xl">
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
          </VStack>
>>>>>>> Stashed changes
      </Flex>
    </ChakraProvider>
  );
}

export default App;
