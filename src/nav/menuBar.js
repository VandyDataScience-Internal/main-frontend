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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { AnimatePresence, motion } from 'framer-motion';
// import { blog } from './pages/blog';
// import { contact } from './pages/contact';
// import { home } from './pages/home.js';
// import { opportunities } from './pages/opportunities';
import Projects from '../pages/projects.js';
// import { team } from './pages/team';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

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
    <Box position="absolute" top={0} left={0} width="100%">
      <Flex
        bg="teal"
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
        <Box position="relative" borderRadius="20px">
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
            {/* <AnimatePresence>
              {isOpen && (
                <motion.div
                  ref={menuRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                > */}
            <Box overflow="hidden">
              <MenuList style={styles.list} bg="teal">
                <MenuItem
                  style={styles.items}
                  _hover={{ bg: 'black', color: 'white' }}
                >
                  <Link to="/Home" style={styles.link}>
                    Home
                  </Link>
                </MenuItem>
                <MenuItem
                  style={styles.items}
                  _hover={{ bg: 'black', color: 'white' }}
                >
                  <Link to="/Projects" style={styles.link}>
                    Projects
                  </Link>
                </MenuItem>
                <MenuItem
                  style={styles.items}
                  _hover={{ bg: 'black', color: 'white' }}
                >
                  <Link to="/Team" style={styles.link}>
                    Team
                  </Link>
                </MenuItem>
                <MenuItem
                  style={styles.items}
                  _hover={{ bg: 'black', color: 'white' }}
                >
                  <Link to="./pages/blog" style={styles.link}>
                    Blog
                  </Link>
                </MenuItem>
                <MenuItem
                  style={styles.items}
                  _hover={{ bg: 'black', color: 'white' }}
                >
                  <Link to="./pages/contact" style={styles.link}>
                    Contact Us
                  </Link>
                </MenuItem>
                <MenuItem
                  style={styles.items}
                  _hover={{ bg: 'black', color: 'white' }}
                >
                  <Link to="./pages/opportunities" style={styles.link}>
                    Opportunities
                  </Link>
                </MenuItem>
              </MenuList>
            </Box>
            {/* </motion.div>
              )}
            </AnimatePresence> */}
          </Menu>
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
    fontSize: '2.5vw',
    bg: 'teal',
    border: 'none',
  },
  list: {
    position: 'relative',
    display: 'grid',
    width: '100%',
    top: '-10px',

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
    width: '70px',
    height: '70px',
    transition: 'all 1s',
    background: 'transparent',
    border: 'none',
  },
};
