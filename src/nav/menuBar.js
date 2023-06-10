import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
import { AnimatePresence, motion } from 'framer-motion';

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
              as={IconButton}
              aria-label="Options"
              icon={
                isOpen ? (
                  <CloseIcon boxSize={30} color="white" />
                ) : (
                  <HamburgerIcon boxSize={45} color="white" />
                )
              }
              variant="unstyled"
              width="70px"
              height="70px"
              _expanded={{ outline: 'none', boxShadow: 'none' }}
              _focus={{ outline: 'none', boxShadow: 'none' }}
              onClick={toggleMenu}
              transition="all 1s"
              transform={isOpen ? 'rotate(180deg)' : ''}
              css={{
                background: 'transparent',
                border: 'none',
              }}
            />
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  ref={menuRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Box overflow="hidden">
                    <MenuList
                      position="relative"
                      display="grid"
                      width="100%"
                      top="-10px"
                      bg="teal"
                      color="white"
                      border="none"
                      textAlign="center"
                    >
                      <MenuItem
                        paddingTop="20px"
                        paddingBottom="20px"
                        display="flex"
                        justifyContent="center"
                        width="100%"
                        height="60px"
                        fontSize="2.5vw"
                        fontFamily="Sequel 75, Arial, sans-serif"
                        bg="teal"
                        _hover={{ bg: 'black', color: 'white' }}
                        css={{
                          border: 'none',
                          color: 'white',
                        }}
                      >
                        <Link
                          to="/about"
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                          }}
                        >
                          About
                        </Link>
                      </MenuItem>
                      <MenuItem
                        paddingTop="20px"
                        paddingBottom="20px"
                        display="flex"
                        justifyContent="center"
                        width="100%"
                        height="60px"
                        fontSize="2.5vw"
                        bg="teal"
                        _hover={{ bg: 'black', color: 'white' }}
                        css={{
                          border: 'none',
                        }}
                      >
                        <Link
                          to="/projects"
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                          }}
                        >
                          Projects
                        </Link>
                      </MenuItem>
                      <MenuItem
                        paddingTop="20px"
                        paddingBottom="20px"
                        display="flex"
                        justifyContent="center"
                        width="100%"
                        height="60px"
                        fontSize="2.5vw"
                        bg="teal"
                        _hover={{ bg: 'black', color: 'white' }}
                        css={{
                          border: 'none',
                        }}
                      >
                        <Link
                          to="/opportunites"
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                          }}
                        >
                          Opportunites
                        </Link>
                      </MenuItem>
                      <MenuItem
                        paddingTop="20px"
                        paddingBottom="20px"
                        display="flex"
                        justifyContent="center"
                        width="100%"
                        height="60px"
                        fontSize="2.5vw"
                        bg="teal"
                        _hover={{ bg: 'black', color: 'white' }}
                        css={{
                          border: 'none',
                        }}
                      >
                        <Link
                          to="/team"
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                          }}
                        >
                          Team
                        </Link>
                      </MenuItem>
                      <MenuItem
                        paddingTop="20px"
                        paddingBottom="20px"
                        display="flex"
                        justifyContent="center"
                        width="100%"
                        height="60px"
                        fontSize="2.5vw"
                        bg="teal"
                        _hover={{ bg: 'black', color: 'white' }}
                        css={{
                          border: 'none',
                        }}
                      >
                        <Link
                          to="/contact_us"
                          style={{
                            color: 'white',
                            textDecoration: 'none',
                          }}
                        >
                          Contact
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
