import { React, useRef, useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';
import InstaPosts from '../components/Instagramposts';
import BarsAnimation from '../components/BarsAnimation';
import Carousel from '../components/Carousel';
import theme from '../theme';
import backgroundImage from '../assets/background/datascience_background5.png';
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
        alignItems="center"
        textAlign="center"
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
            <Image
              src={backgroundImage}
              objectFit="cover"
              objectPosition={'center 20%'}
              height={'70vh'}
              width={'98.7239551vw'}
            />
          </div>
          <Flex
            justifyContent={'space-around'}
            alignItems={'flex-end'}
            width={'70%'}
            position={'absolute'} // set to relative
            top={'50vh'}
          >
            {BarsAnimation(25, -1)}
          </Flex>
          <div style={{ marginBottom: '12vh' }}>
            <Heading size={'s'}>Welcome to the</Heading>
            <Heading>Vanderbilt Data Science Club</Heading>
          </div>
          <Heading as="h2" size="lg" pb={'5vw'} pl={'7vw'}>
            <Box as="span" display="inline-block">
              <Text as="span" pb="5px">
                Who we've partnered with!
              </Text>
            </Box>
          </Heading>
          <Carousel images={images} />
          <Flex>
            <Box width={'45vw'} display="flex" justifyContent="center">
              <Image
                ref={ref}
                src={backgroundImage2}
                fallbackSrc="https://via.placeholder.com/150"
                opacity={isVisible ? 1 : 0}
                transition="opacity 0.4s ease-in-out"
                objectFit={'cover'}
                height={'40vh'}
              />
            </Box>
            <Box
              width={'45vw'}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              ref={ref}
              opacity={isVisible ? 1 : 0}
              transition="opacity 1s ease-in-out"
            >
              <Heading size={'lg'}>Our Mission</Heading>
              <Text marginLeft={4}>
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
          </Flex>
          <Box minHeight={'20vh'} bgColor={'white'} />
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
