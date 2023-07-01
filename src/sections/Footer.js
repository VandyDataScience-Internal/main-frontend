import {
  Box,
  chakra,
  Container,
  Stack,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

import { SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si';
import { ReactNode } from 'react';

export function SocialButton({ children, label, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <chakra.button marginLeft="25px" color="#FDDC7E">
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </a>
  );
}

const Footer = () => {
  return (
    <Box bg="grey" bottom="0" left="0" right="0">
      {' '}
      {/*I was able to flip the positions but i can't get the precise positioning right so far*/}
      <Container>
        <Stack right="0" paddingLeft="90%">
          <a href="/">
            {' '}
            {/* The Vds logo*/}
            <Image
              filter="invert(1)"
              src={process.env.PUBLIC_URL + '/vds-logo.PNG'}
              alt="Logo"
              boxSize="80px"
              width="4.0wv"
              paddingTop={10}
            />
          </a>
        </Stack>

        <Stack display="in-line" right="0" paddingBottom="0">
          {' '}
          {/*Row of social media buttons*/}
          {/*Just sub the hashtags for what links you want to put and it should be good?*/}
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/vandydatascience/'}
          >
            <SiInstagram />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/company/vanderbilt-data-science'}
          >
            <SiLinkedin />
          </SocialButton>
          <SocialButton
            label={'Email'}
            href={'mailto:vanderbilt.datascience@gmail.com'}
          >
            <SiGmail />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
