import React, {useState, useEffect} from 'react'
import '../assets/css/home.css';
import {
    Box,
    Flex,
    HStack,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
import { motion } from 'framer-motion' 

const Links = ['home', 'about', 'projects'];
const NavLink = ({ children }) => (
<Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
    textDecoration: 'underline', 
    bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
</Link>
);

/*const MotionBox = motion(Box)
const bars = ['black', 'black', 'black', 'black', 'black', 'black', 'black', ]
const Bar = ({ delay }) => (
    <MotionBox
      backgroundColor="black"
      borderRadius="lg"
      width="20px"
      height="100px"
      marginRight="20px"
      initial={{ y: -300 }} // initial position
      animate={{ y: 0}} // final position
      transition={{ 
        duration: 1, // duration of animation
        delay: delay // start time of animation
      }}
    />
  );*/

function Home() {
    
    const [bars, setBars] = useState([]);
    const totalBars = 22; 
    const orderBars = [1, 2, 5, 3, 4, 6, 8, 7, 9, 10, 11, 12, 
                        13, 15, 14, 16, 18, 17, 19, 20, 21, 22]
    useEffect(() => {
      let newBars = [];
      for(let i = 0; i < totalBars; i++){
        newBars.push({
          id: i,
          height: 25 - Math.abs(i - 10)*2
        });
      }
      setBars(newBars);
    }, [totalBars]);
  
    return (
        <>
          <Box px={4} right={0} position={'fixed'}>
            <Flex h={16} alignItems={'center'}>
                <HStack
                as="nav"
                spacing={4}
                display={'flex'}
                justify={'flex-end'} 
                direction={'row'}
                >
                {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                ))}
                </HStack>
            </Flex>
            </Box>
            <div className="container">
            <div className="bar-container">
                {orderBars.map((order) => {
                    const bar = bars.find(b => b.id === order - 1); // Array indices are 0-based
                    return bar ? 
                    <div key={bar.id} className="bar" style={{height: `${bar.height}vh`, animationDelay: `${bar.id * 0.1}s`}}/> 
                    : null;
                })}    
            </div>
            <div className="text-container">Vanderbilt Data Science</div>
            </div>

        </>
      );
}

export default Home


  