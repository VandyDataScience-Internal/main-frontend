import React, { useState } from 'react';
import {
  ChakraProvider,
  Heading,
  Box,
  SimpleGrid,
  Tooltip,
  VStack,
  theme,
  Container,
  Card,
  CardBody,
  Center,
} from '@chakra-ui/react';

import adaline from '../assets/images/adaline.png';
import aditya from '../assets/images/aditya.jpeg';
import brooke from '../assets/images/brooke.png';

const exec = [
  {
    name: 'Adaline',
    image: adaline,
    funFact: 'I go to Vandy',
    pos: 'President',
  },
  {
    name: 'Brooke',
    image: brooke,
    funFact: 'I have perfect pitch!',
    pos: 'Treasurer',
  },
];

const members = [{ name: 'aditya', image: aditya, funFact: 'I like dogs' }];

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
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        style={styles.page}
      >
        {!isHovered && <Box as="img" src={src} width="100%" height="100%" />}
        {isHovered && (
          <Tooltip placement="top" isDisabled>
            <Box style={styles.sections}>
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
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              {exec.map((member, index) => (
                <Card key={index} height="100%">
                  <Center>
                    <CardBody mt={-10}>
                      <HoverImage
                        src={member.image}
                        name={member.name}
                        pos={member.pos}
                        about={member.funFact}
                      />
                    </CardBody>
                  </Center>
                </Card>
              ))}
            </SimpleGrid>
            {/*This is the grid for Members*/}
            <Heading>Members</Heading>
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              {members.map((member, index) => (
                <Card key={index}>
                  <Center>
                    <CardBody mt={-10}>
                      <HoverImage
                        src={member.image}
                        name={member.name}
                        pos={member.pos}
                        about={member.funFact}
                      />
                    </CardBody>
                  </Center>
                </Card>
              ))}
            </SimpleGrid>
            {/* <Heading>Past Members</Heading>{' '}
            {/*This is the grid for past members*/}
            {/* <SimpleGrid columns={3} spacing={5}></SimpleGrid> */}
          </VStack>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Team;

let styles = {
  page: {
    marginTop: '50px',
    width: '150px',
    height: '200px',
    position: 'relative',
  },
  sections: {
    width: '100%',
    height: '100%',
    color: 'black',
    bg: 'gray.200',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    p: '6px',
    maxWidth: '100%', // Set the maximum width for the text box
    wordBreak: 'break-word', // Enable word wrapping
    whiteSpace: 'normal', // Allow text to wrap to the next line
    overflowWrap: 'break-word', // Enable word wrapping for long words
  },
};
