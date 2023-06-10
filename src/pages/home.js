import React, { useState, useEffect } from 'react';
import '../assets/css/home.css';
import backgroundImage from '../assets/background/background_vanderbilt.png';
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

// const Links = ['home', 'about', 'projects'];
// const NavLink = ({ children }) => (
// <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//     textDecoration: 'underline',
//     bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
// </Link>
// );

function Home() {
  const [bars, setBars] = useState([]);
  const totalBars = 22;
  const orderBars = [
    1, 2, 5, 3, 4, 6, 8, 7, 9, 10, 11, 12, 13, 15, 14, 16, 18, 17, 19, 20, 21,
    22,
  ];
  useEffect(() => {
    let newBars = [];
    for (let i = 0; i < totalBars; i++) {
      newBars.push({
        id: i,
        height: 25 - Math.abs(i - 10) * 2,
      });
    }
    setBars(newBars);
  }, [totalBars]);

  return (
    <>
      <Box
        px={4}
        sx={{
          position: 'absolute',
          top: 0,
          width: '99.9vw',
          zIndex: 2,
          backgroundColor: '#11141E',
          color: 'white',
          overflowX: 'hidden',
        }}
      >
        {/* <Flex h={16} alignItems={'center'} justifyContent={'flex-end'}>
          <HStack
            as="nav"
            spacing={4}
            display={'flex'}
            justify={'flex-end'}
            direction={'row'}
          >
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex> */}
      </Box>
      <Box
        className="background-image"
        bgImage={`url(${backgroundImage})`}
        zIndex={-1} // place this under all content
      />
      <Flex
        justifyContent={'space-around'}
        alignItems={'flex-end'}
        width={'50%'}
        position={'relative'} // set to relative
        top={'-10vh'}
      >
        {orderBars.map(order => {
          const bar = bars.find(b => b.id === order - 1);
          return bar ? (
            <div
              key={bar.id}
              className="bar"
              style={{
                height: `${bar.height}vh`,
                animationDelay: `${2 + bar.id * 0.1}s`,
                backgroundColor: 'white',
                filter: 'brightness(0.90)',
              }}
            />
          ) : null;
        })}
      </Flex>

      <Box
        position="relative"
        top="55vh"
        width="99vw" // Changed from 100vw to 100%
        height="50vh"
        zIndex="1"
        backgroundColor="#1e1b11"
        p={5}
        className="mission-statement"
      >
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '0.5rem',
          }}
        >
          Our Mission
        </div>
        <div
          style={{ fontSize: '1rem', color: 'white', wordBreak: 'break-word' }}
        >
          Vanderbilt Data Science aims to empower students from all experience
          levels to learn data science, artificial intelligence (AI), and
          machine learning (ML) through a project-based approach in which
          students will be able to have hands-on experience with real data while
          speaking with experienced industry professionals. Our goal is to
          become a community that encourages and actively promotes the learning
          of data science within and outside the classroom environment.
        </div>
      </Box>

      <Box
        top={'35vh'}
        height={'100vh'}
        width={'100%'} // Changed from 100vw to 100%
        bgColor={'white'}
        position={'relative'}
      />
    </>
  );
}

export default Home;
