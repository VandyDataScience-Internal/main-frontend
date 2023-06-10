import React, { useEffect, useState } from 'react';
import InstaFeed from './Instagramposts';
import Navbar from './nav/menuBar.js';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Team from './pages/team.js';
import Blog from './pages/blog.js';
import Contact from './pages/contact.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex, VStack } from '@chakra-ui/react';
import theme from './theme';

function App() {
  //console.log('test: ')
  //console.log(feeds.data[0].media_url)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      {/* <Router>
        <Navbar />
        <Routes></Routes>
      </Router> */}
      <ChakraProvider theme={theme}>
        <Flex
          minWidth="max-content"
          alignItems="center"
          textAlign="center"
          fontSize="xl"
        >
          <VStack spacing={8}>
            <Home />
          </VStack>
        </Flex>
        <InstaFeed />
      </ChakraProvider>
    </>
  );
}

export default App;
