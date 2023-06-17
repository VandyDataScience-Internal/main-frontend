import {
  Box,
  chakra,
  Container,
  Stack,
  Image,
  VisuallyHidden,
} from '@chakra-ui/react';

import { SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si';
// import { ReactNode } from 'react';

export function SocialButton({ children, label, href }) {
  return (
    <chakra.button href={href} marginLeft="25px" color="#FDDC7E">
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

const Footer = () => {
  return (
    <Box bg="grey" bottom="0" left="0" right="0">
      <Container height="80px">
        <a href="/">
          <Image
            filter="invert(1)"
            src={process.env.PUBLIC_URL + '/vds-logo.PNG'}
            alt="Logo"
            position="relative"
            left="15px"
            height="80px"
            width="140px"
          />
        </a>
        <Stack display="in-line" position="relative" right="0" paddingLeft="80%" top="-25px">
          <SocialButton label={'Instagram'} href={'#'}>
            <SiInstagram />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'#'}>
            <SiLinkedin />
          </SocialButton>
          <SocialButton label={'Email'} href={'#'}>
            <SiGmail />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
