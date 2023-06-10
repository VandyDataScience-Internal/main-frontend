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
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F75b553a1-9360-413c-a0f1-cad9b4539752%2Fimg.png?id=0057bc6c-5ca6-41be-8621-f1db7ffa52c5&table=block&spaceId=3b0a5108-4e9b-4a3b-bbe8-76677053495d&width=600&userId=81523f94-3e73-46f0-9f46-8f50fa5912c9&cache=v2"
                name="Adaline"
                pos="President"
                about="I go to vandy"
              />
              <HoverImage src="main-frontend\\src\\assets\\images\\1632855087136.jfif" />
            </SimpleGrid>{' '}
            {/*This is the grid for Members*/}
            <Heading>Members</Heading>
            <SimpleGrid columns={3} spacing={5}>
              <HoverImage
                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F39201eb5-bf9e-4ac2-8819-a443083c8434%2FAdityaShrey_copy.jpeg?id=55a994c1-2c0e-4708-ad77-4bb752fb4caa&table=block&spaceId=3b0a5108-4e9b-4a3b-bbe8-76677053495d&width=600&userId=81523f94-3e73-46f0-9f46-8f50fa5912c9&cache=v2"
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
