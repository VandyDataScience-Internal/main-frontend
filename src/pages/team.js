import React, { useState } from 'react';
import {
  ChakraProvider,
  Heading,
  Image,
  Box,
  SimpleGrid,
  Tooltip,
  Text,
  Link,
  VStack,
  Wrap,
  WrapItem,
  Code,
  theme,
  Button,
  Container,
} from '@chakra-ui/react';

import adaline from '../assets/images/adaline.png';
import aditya from '../assets/images/aditya.jpeg';
import brooke from '../assets/images/brooke.png';

const Team = () => {
  function HoverImage({ src, name, pos, about }) {
    /*for copying images right click and select "copy image addreess"*/
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <Box
        width="150px"
        height="200px"
        position="relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {!isHovered && <Box as="img" src={src} width="100%" height="100%" />}
        {isHovered && (
          <Tooltip
            label={'This should not be visible'}
            placement="top"
            isDisabled
          >
            <Box
              width="100%"
              height="100%"
              color="black"
              bg="gray.200"
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              p="6px"
              maxWidth="100%" // Set the maximum width for the text box
              wordBreak="break-word" // Enable word wrapping
              whiteSpace="normal" // Allow text to wrap to the next line
              overflowWrap="break-word" // Enable word wrapping for long words
            >
              <div>
                {name && (
                  <span>
                    {'Name: '}
                    {name}
                    <br />
                  </span>
                )}
                {pos && (
                  <span>
                    {'Position: '}
                    {pos}
                    <br />
                  </span>
                )}
                {about && (
                  <span>
                    {'About: '}
                    {about}
                  </span>
                )}
              </div>
            </Box>
          </Tooltip>
        )}
      </Box>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Container id="main">
        <Heading>The Team</Heading>

        <Box marginTop="50px">
          <VStack spacing={10} align="stretch">
            <Heading size="md">Exec</Heading>
            <SimpleGrid columns={3} spacing={5}>
              <HoverImage
                src={adaline}
                name="Adaline"
                pos="President"
                about="I go to vandy"
              />
              <HoverImage
                src={brooke}
                name="Brooke"
                pos="Treasurer"
                about="I have perfect pitch!"
              />
              {/* <HoverImage src="main-frontend\\src\\assets\\images\\1632855087136.jfif" /> */}
            </SimpleGrid>{' '}
            {/*This is the grid for Members*/}
            <Heading>Members</Heading>
            <SimpleGrid columns={3} spacing={5}>
              <HoverImage
                src={aditya}
                name="Aditiya"
                pos="Developer"
                about="I like dogs"
              />
            </SimpleGrid>
            <Heading>Past Members</Heading>{' '}
            {/*This is the grid for past members*/}
            <SimpleGrid columns={3} spacing={5}></SimpleGrid>
          </VStack>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Team;
