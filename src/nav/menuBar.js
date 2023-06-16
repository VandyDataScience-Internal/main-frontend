import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  // Track the width of the screen
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box position="fixed" top={0} left={0} width="100%">
      <Flex
        bg="#FDDC7E"
        color="white"
        alignItems="center"
        height="70px"
        ref={navbarRef}
      >
        <Box flex="1" display="flex" alignItems="center" paddingLeft="1rem">
          <Image
            src={process.env.PUBLIC_URL + '/vds-logo.PNG'}
            alt="Logo"
            boxSize="80px"
            width="4.0wv"
          />
        </Box>
        <Box position="absolute" right="0" borderRadius="20px">
          {windowWidth > 950 ? (
            // Render buttons when screen width is less than 950 pixels
            <Flex>
              <Button as={Link} to="/Home" style={styles.button}>
                Home
              </Button>
              <Button as={Link} to="/Projects" style={styles.button}>
                Projects
              </Button>
              <Button as={Link} to="/Team" style={styles.button}>
                Team
              </Button>
              <Button as={Link} to="/Blog" style={styles.button}>
                Blog
              </Button>
              <Button as={Link} to="/Opportunities" style={styles.button}>
                Opportunities
              </Button>
              <Button as={Link} to="/Contact" style={styles.button}>
                Contact Us
              </Button>
            </Flex>
          ) : (
            // Render menu list when screen width is 950 pixels or more
            <Menu>
              <MenuButton
                style={styles.button}
                as={IconButton}
                aria-label="Options"
                icon={
                  isOpen ? (
                    <CloseIcon boxSize={30} color="white" />
                  ) : (
                    <HamburgerIcon boxSize={45} color="white" />
                  )
                }
                _expanded={{ outline: 'none', boxShadow: 'none' }}
                _focus={{ outline: 'none', boxShadow: 'none' }}
                onClick={toggleMenu}
                transform={isOpen ? 'rotate(180deg)' : ''}
              />
              <Box overflow="hidden">
                <MenuList style={styles.list} bg="#FDDC6A">
                  <MenuItem
                    style={styles.items}
                    _hover={{ bg: '#2F2F2F', color: 'white' }}
                  >
                    <Link to="/Home" style={styles.link}>
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem
                    style={styles.items}
                    _hover={{ bg: '#2F2F2F', color: 'white' }}
                  >
                    <Link to="/Projects" style={styles.link}>
                      Projects
                    </Link>
                  </MenuItem>
                  <MenuItem
                    style={styles.items}
                    _hover={{ bg: '#2F2F2F', color: 'white' }}
                  >
                    <Link to="/Team" style={styles.link}>
                      Team
                    </Link>
                  </MenuItem>
                  <MenuItem
                    style={styles.items}
                    _hover={{ bg: '#2F2F2F', color: 'white' }}
                  >
                    <Link to="/Blog" style={styles.link}>
                      Blog
                    </Link>
                  </MenuItem>
                  <MenuItem
                    style={styles.items}
                    _hover={{ bg: '#2F2F2F', color: 'white' }}
                  >
                    <Link to="/Opportunities" style={styles.link}>
                      Opportunities
                    </Link>
                  </MenuItem>
                  <MenuItem
                    style={styles.items}
                    _hover={{ bg: '#2F2F2F', color: 'white' }}
                  >
                    <Link to="/Contact" style={styles.link}>
                      Contact Us
                    </Link>
                  </MenuItem>
                </MenuList>
              </Box>
            </Menu>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

let styles = {
  items: {
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '60px',
    fontSize: '2.4vw',
    border: 'none',
    fontWeight: 'bold',
    padding: '20px',
  },
  list: {
    position: 'relative',
    right: '0',
    display: 'grid',
    width: '100%',
    top: '-18px',
    color: 'white',
    border: 'none',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  button: {
    variant: 'unstyled',
    height: '70px',
    transition: 'all 1s',
    background: 'transparent',
    border: 'none',
    marginRight: '0px',
    fontSize: '1.3rem',
    padding: '15px 15px',
    fontWeight: 'bold',
  },
};
