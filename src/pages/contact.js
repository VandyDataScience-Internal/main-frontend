import React, { useRef, useState } from 'react';
import {
  ChakraProvider,
  Heading,
  Box,
  SimpleGrid,
  VStack,
  theme,
  Container,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import adaline from '../assets/images/adaline.png';
import aditya from '../assets/images/aditya.jpeg';
import brooke from '../assets/images/brooke.png';
import naol from '../assets/images/naol.png';

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
  {
    name: 'Naol Wordoffa',
    image: naol,
    bio: 'I can speak 4 languages!',
    pos: 'member',
    linkedIn: 'https://www.linkedin.com/in/naol-wordoffa-61500b221/',
    github: 'https://github.com/nwordoffa3',
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
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z434wg8',
        'template_xlvq0us',
        form.current,
        'gy8GXWX7NBJ6ui9Ol'
      )
      .then(
        result => {
          console.log(result.text);
          setIsSubmitted(true);
          e.target.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <ChakraProvider>
      <Container marginBottom={5}>
        <Box as="form" ref={form} onSubmit={sendEmail} style={styles.yellowBox}>
          {isSubmitted ? (
            <Heading as="h3" size="xl">
              Your form was successfully submitted. We will get back to you
              shortly.
              <br />
              Thank you!
            </Heading>
          ) : (
            <>
              <FormControl marginBottom="15px">
                <Heading as="h1" size="xl" marginBottom="5px">
                  Contact Us
                </Heading>
                <p marginBottom="15px">
                  Please fill out this form and we will contact you shortly.
                  <br></br>Thank you!
                </p>
              </FormControl>
              <FormControl marginBottom="15px">
                <FormLabel>
                  Name{' '}
                  <Tooltip label="This is a required field">
                    <span style={{ color: 'red', cursor: 'pointer' }}>*</span>
                  </Tooltip>
                </FormLabel>
                <Input
                  placeholder="Type in your name..."
                  type="text"
                  required
                  name="user_name"
                  backgroundColor={'white'}
                />
              </FormControl>
              <FormControl marginBottom="15px">
                <FormLabel>
                  Email{' '}
                  <Tooltip label="This is a required field">
                    <span style={{ color: 'red', cursor: 'pointer' }}>*</span>
                  </Tooltip>
                </FormLabel>
                <Input
                  placeholder="Type in your email.."
                  type="email"
                  required
                  name="user_email"
                  backgroundColor={'white'}
                />
              </FormControl>
              <FormControl marginBottom="15px">
                <FormLabel>
                  Message{' '}
                  <Tooltip label="This is a required field">
                    <span style={{ color: 'red', cursor: 'pointer' }}>*</span>
                  </Tooltip>
                </FormLabel>
                <Textarea
                  placeholder="Enter your message here..."
                  required
                  name="message"
                  rows={8}
                  cols={50}
                  backgroundColor={'white'}
                />
              </FormControl>
              <Button
                marginBottom="15px"
                colorScheme="teal"
                type="submit"
                mt={4}
              >
                Send
              </Button>
            </>
          )}
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Team;

// all styling
let styles = {
  yellowBox: {
    height: '630px',
    width: '500px',
    marginTop: '150px',
    fontFamily: 'sans-serif',
    marginLeft: '35%',
    background: '#FDDC7E',
    boxShadow: '2px 3px 5px #999',
    padding: '20px',
  },
};
