import React from 'react';
import { ChakraProvider, Heading, theme, Box, Text } from '@chakra-ui/react';

/*
* Blog
* 1) Make a card template that on has an image on the front of the current PDF
    -> The cards will take in one parameters of the PDF
* 2) Make folder with the Blog assets
* 3) Make the 6
* 3) Make a map/array that puts s
*
*
*/

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
