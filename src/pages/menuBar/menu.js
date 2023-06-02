import React, { useState } from 'react';
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="absolute" top={0} left={0} width="100%">
      <Flex bg="darkblue" color="white" alignItems="center" height="70px">
        <Box flex="1" />
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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                  style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)' }}
                >
                  <MenuList
                    bg="darkblue"
                    color="white"
                    border="none"
                    boxShadow="md"
                    minWidth="120px"
                    fontSize={18}
                    textAlign="center"
                  >
                    <MenuItem
                      py={2}
                      px={4}
                      height="60px"
                      _hover={{ bg: 'darkblue', color: 'white' }}
                      css={{
                        background: 'darkblue',
                        border: 'none',
                      }}
                    >
                      About Us
                    </MenuItem>
                    <MenuItem
                      py={2}
                      px={4}
                      height="60px"
                      _hover={{ bg: 'darkblue', color: 'white' }}
                      css={{
                        background: 'darkblue',
                        border: 'none',
                      }}
                    >
                      Projects
                    </MenuItem>
                    <MenuItem
                      py={2}
                      px={4}
                      height="60px"
                      _hover={{ bg: 'darkblue', color: 'white' }}
                      css={{
                        background: 'darkblue',
                        border: 'none',
                      }}
                    >
                      Opportunities
                    </MenuItem>
                    <MenuItem
                      py={2}
                      px={4}
                      height="60px"
                      _hover={{ bg: 'darkblue', color: 'white' }}
                      css={{
                        background: 'darkblue',
                        border: 'none',
                      }}
                    >
                      Team
                    </MenuItem>
                    <MenuItem
                      py={2}
                      px={4}
                      height="60px"
                      _hover={{ bg: 'darkblue', color: 'white' }}
                      css={{
                        background: 'darkblue',
                        border: 'none',
                      }}
                    >
                      Contact Us
                    </MenuItem>
                  </MenuList>
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
