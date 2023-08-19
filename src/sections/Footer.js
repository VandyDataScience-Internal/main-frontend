import {
  Box,
  chakra,
  Container,
  Stack,
  Image,
  VisuallyHidden,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si';
// import { ReactNode } from 'react';

export function SocialButton({ children, label, href }) {
  return (
    <chakra.button href={href} marginLeft="25px" color="white">
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

const Footer = () => {
  return (
    <Box bg="black" bottom="0" left="0" right="0">
      <Container height="20%">
        <a href="/">
          <Image
            filter="invert(1)"
            src={process.env.PUBLIC_URL + '/vds-logo.PNG'}
            alt="Logo"
            position="relative"
            left="15px"
            height="80px"
            width="140px"
            top = {'3vh'}
          />
        </a>
        <Stack
          display="in-line"
          position="relative"
          right="0"
          paddingLeft="80%"
          top="-5vh"
        >
          <SocialButton label={'Instagram'} href={'#'}>
            <SiInstagram />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'#'}>
            <SiLinkedin />
          </SocialButton>
          <Link to="/contact">
              <SocialButton label={'Email'}>
                  <SiGmail />
              </SocialButton>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
