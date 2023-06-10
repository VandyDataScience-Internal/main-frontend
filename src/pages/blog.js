import React from 'react';
import { ChakraProvider, Heading, theme, Box, Text } from '@chakra-ui/react';

function Blog() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={8} textAlign="center">
        <Heading as="h1" size="4xl" mb={6}>
          <Text as="u">BLOG</Text>
        </Heading>
        <Text fontSize="xl" textAlign="left">
          Coming Soon
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default Blog;
