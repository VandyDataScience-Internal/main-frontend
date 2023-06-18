import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Tooltip,
  Container,
} from '@chakra-ui/react';

export const Contact = () => {
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
    <Container height="70%" marginBottom={60}>
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
              />
            </FormControl>
            <FormControl marginBottom="15px">
              <FormLabel>Subject</FormLabel>
              <Input
                placeholder="Enter your message here..."
                type="text"
                name="user_subject"
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
                rows={10}
                cols={50}
              />
            </FormControl>
            <Button marginBottom="15px" colorScheme="teal" type="submit" mt={4}>
              Send
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Contact;

let styles = {
  yellowBox: {
    height: '540px',
    width: '500px',
    marginTop: '150px',
    fontFamily: 'sans-serif',
    marginLeft: '35%',
    background: '#FDDC7E',
    boxShadow: '2px 3px 5px #999',
    padding: '20px',
  },
};
