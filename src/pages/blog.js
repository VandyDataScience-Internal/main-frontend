import React from 'react';
import { ChakraProvider, Heading, theme, Box, Text } from '@chakra-ui/react';

function Blog() {
  return (
    <ChakraProvider>
      <Box p={8} style={styles.page}>
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

let styles = {
  page: {
    marginTop: '50px',
    textAlign: 'center',
  },
};
