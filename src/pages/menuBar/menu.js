import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Image } from '@chakra-ui/react';
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
    const handleClickOutside = (event) => {
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
      <Flex bg="teal" color="white" alignItems="center" height="70px" ref={navbarRef}>
      <Box flex="1" display="flex" alignItems="center" paddingLeft="1rem">
          <Image src="logo.png" alt="Logo" boxSize="40px" />
        </Box>
        <Box position="relative">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={isOpen ? <CloseIcon boxSize={30} color="white" /> : <HamburgerIcon boxSize={45} color="white" />}
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
                        }}
                      >
                        About Us
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
                        Projects
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
                        Opportunities
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
                        Team
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
                        Contact Us
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
