import React, {useEffect, useState} from 'react';
import Home from './pages/home.js'
import InstaFeed from './Instagramposts'
import {
  ChakraProvider,
  Flex,
  VStack,
} from '@chakra-ui/react';
import theme from './theme'


function App() {
  //console.log('test: ')
  //console.log(feeds.data[0].media_url)
  return (
    <ChakraProvider theme={theme}>
      <Flex minWidth="max-content" alignItems="center" textAlign="center" fontSize="xl" >
        <VStack spacing={8}>
          <Home/>
        </VStack>    
      </Flex>
      <InstaFeed />
    </ChakraProvider>
  );
}

export default App;

