import { React, useRef, useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Image,
  Heading,
  Text
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

import InstaPosts from '../components/Instagramposts';
import Carousel from '../components/Carousel';
import theme from '../theme';
import backgroundImage2 from '../assets/background/datascience_background1.png';

import image1 from '../assets/images/consprkcent.png';
import image2 from '../assets/images/girlscouts.png';
import image3 from '../assets/images/landtrust.png';
import image4 from '../assets/images/nash0.png';
import image5 from '../assets/images/dsi-logo.png';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const images = [
    { id: '1', url: image1, href: '/centennialpark' },
    { id: '2', url: image2, href: '/girlscouts' },
    { id: '3', url: image3, href: '/landtrusttn' },
    { id: '4', url: image4, href: '/nash0' },
    { id: '5', url: image5, href: '/dsi' },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Flex
          minWidth="max-content"
          alignItems="flex-start"
          textAlign="left"  // Adjusted this line
          fontSize="xl"
      >
        <VStack spacing={8}>
            <div
                style={{
                    marginTop: '10vh',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <Box width={'100vw'} display="flex" alignItems="flex-start" bgColor="#FEE893" height={'90vh'} paddingLeft="2rem">
                    <Box 
                        paddingTop={'18vh'}
                        fontSize="8vw" 
                        fontWeight="900" 
                        color="black" 
                        maxWidth="80vw" 
                        wordwrap="break-word" 
                        fontFamily="Inter"
                        textAlign="left"  // Added this line
                    >
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .typeString('your data-driven solution.')
                                .start();
                            }}
                        />
                    </Box>
                </Box>
            </div>
          {/* <div style={{ marginBottom: '12vh' }}>
            <Heading size={'s'}>Welcome to the</Heading>
            <Heading>Vanderbilt Data Science Club</Heading>
          </div> */}
          <Box
            width="45vw"  // Occupy 50% width
            marginLeft="-45vw" 
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="flex-start"
            ref={ref}
            >
              <Heading size={'lg'}>Our Mission</Heading>
              <Box bgColor={'black'} height={'0.3vh'} width={'12vw'} fontFamily={'Inter'} fontWeight={'700'}></Box>
              <Text marginTop={'4vh'} fontFamily={'Inter'} fontWeight={'400'}>
                Vanderbilt Data Science aims to empower students from all
                experience levels to learn data science, artificial intelligence
                (AI), and machine learning (ML) through a project-based approach
                in which students will be able to have hands-on experience with
                real data while speaking with experienced industry
                professionals. Our goal is to become a community that encourages
                and actively promotes the learning of data science within and
                outside the classroom environment.
              </Text>
            </Box>
          <Heading as="h2" size="lg" pl={'7vw'}>
            <Box as="span" display="inline-block">
              <Text as="span" pb="5px" fontFamily={'Inter'} fontWeight={'700'}>
                Who we've partnered with!
              </Text>
            </Box>
          </Heading>
          <Carousel images={images}/>
          <Flex>
            {/* <Box width={'45vw'} display="flex" justifyContent="center">
              <Image
                ref={ref}
                src={backgroundImage2}
                fallbackSrc="https://via.placeholder.com/150"
                opacity={isVisible ? 1 : 0}
                transition="opacity 0.4s ease-in-out"
                objectFit={'cover'}
                height={'40vh'}
              />
            </Box> */}
          </Flex>
          {/* <Box minHeight={'20vh'} bgColor={'white'} /> */}
        </VStack>
      </Flex>

      <Box
        bgColor={'white'}
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Heading marginLeft={10}> Check Our Instagram </Heading>
        <InstaPosts />
      </Box>
    </ChakraProvider>
  );
}
