import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
      heading: `'Roboto', sans-serif`,
      body:  `'Roboto', sans-serif`, 
    },
    global: {

    },
    // semanticTokens: {
    //   colors: {
    //     "chakra-body-text": {
    //       _light: "#1e1b11",
    //       _dark: "#1e1b11",
    //     },
    //     "chakra-body-bg": {
    //       _light: "#fee893",
    //       _dark: "#fee893",
    //     },
    //   },
    // },
  });

  export default theme
