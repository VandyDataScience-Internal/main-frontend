import React, { useState } from 'react';
import {
  ChakraProvider,
  Heading,
  Box,
  SimpleGrid,
  VStack,
  theme,
  Container,
  Center,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import adaline from '../assets/images/adaline.png';
import aditya from '../assets/images/aditya.jpeg';
import brooke from '../assets/images/brooke.png';

// all member info
const allMembers = [
  {
    name: 'Adaline Leong',
    image: adaline,
    bio: 'I own 10+ Rubiks cubes and I am passionate about data-driven solutions!',
    pos: 'President',
    linkedIn: 'https://www.linkedin.com/in/jiayinleong/',
    github: 'https://github.com/AdalineL',
  },
  {
    name: 'Brooke Stevens',
    image: brooke,
    bio: 'I have perfect pitch!',
    pos: 'Treasurer',
    linkedIn: 'https://www.linkedin.com/in/jiayinleong/',
    github: 'https://github.com/brookemstevens',
  },
  {
    name: 'Aditya Shrey',
    image: aditya,
    bio: 'I like dogs',
    pos: 'member',
    linkedIn: 'https://www.linkedin.com/in/jiayinleong/',
    github: 'https://github.com/aditya-shrey',
  },
];

// function for on hover text change effect
export function Inside({ src, bio, name }) {
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
      {!isHovered && (
        <Box>
          <Center>
            <img src={src} style={styles.inside} alt={name}></img>
          </Center>
        </Box>
      )}
      {isHovered && (
        <Box>
          <div style={styles.text}>{bio && <span>{bio}</span>}</div>
        </Box>
      )}
    </Box>
  );
}

const Team = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container id="main" height="81vw">
        <Heading marginTop="150px" fontFamily="sans-serif" marginLeft="36%">
          Our Team
        </Heading>

        <Box marginTop="50px">
          <VStack spacing={10} align="stretch">
            <SimpleGrid columns={[2, null, 3]} spacing="100px">
              {allMembers.map((member, index) => (
                <div>
                  <Box key={index} style={styles.outside}>
                    <Inside
                      src={member.image}
                      bio={member.bio}
                      name={member.name}
                    />
                  </Box>
                  <div style={styles.words}>
                    <p style={styles.name}>{member.name}</p>
                    <p style={styles.position}>{member.pos}</p>
                  </div>
                  <div style={styles.icons}>
                    <a href={member.linkedIn}>
                      <FaLinkedin style={styles.iconLeft} />
                    </a>
                    <a href={member.github}>
                      <FaGithub style={styles.iconRight} />
                    </a>
                  </div>
                </div>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Team;

// all styling
let styles = {
  page: {
    marginTop: '50px',
    width: '150px',
    position: 'relative',
    height: '200px',
  },
  profile: {
    height: '200px',
    width: '200px',
    borderRadius: '50%',
  },
  inside: {
    margin: '8px 0 0 10px',
    borderRadius: '50%',
    width: 150,
    height: 170,
    objectFit: 'cover',
  },
  outside: {
    borderRadius: '50%',
    width: 160,
    height: 186,
    background: '#FDDC7E',
    boxShadow: '2px 3px 5px #999',
  },
  text: {
    borderRadius: 12,
    font: '15px/13px Helvetica, Verdana, Tahoma',
    height: 20,
    minWidth: 14,
    padding: '65px 5px 5px 25px',
    textAlign: 'center',
  },
  iconRight: {
    height: '30px',
    width: '30px',
    display: 'inline-block',
  },
  iconLeft: {
    height: '30px',
    marginRight: '5px',
    width: '30px',
    display: 'inline-block',
  },
  icons: {
    marginLeft: '40%',
  },
  words: {
    width: '300px',
  },
  name: {
    marginTop: '10px',
    fontSize: '25px',
    fontFamily: 'sans-serif',
  },
  position: {
    fontSize: '15px',
    fontFamily: 'sans-serif',
    marginLeft: '18%',
    marginBottom: '5px',
  },
};
