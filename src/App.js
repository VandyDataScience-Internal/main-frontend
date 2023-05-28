import React from 'react';
import Home from './pages/home.js'
import {
  ChakraProvider,
  Flex,
  VStack,
} from '@chakra-ui/react';
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minWidth="max-content" alignItems="center" textAlign="center" fontSize="xl" >
        <VStack spacing={8}>
          <Home/>
        </VStack>    
      </Flex>
    </ChakraProvider>
  );
}

export default App;
