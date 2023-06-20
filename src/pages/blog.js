// Font Update
import '@fontsource/open-sans/700.css';
import React from 'react';

// React Router
import {
  Routes, //replaces "Switch" used till v5
  Route,
} from 'react-router-dom';

// Individual Pages
import BlogPageOne from '../components/blogPages/blogPageOne';
import BlogPageTwo from '../components/blogPages/blogPageTwo';
import BlogMain from '../components/blogPages/blogMain';
import { Box } from '@chakra-ui/react';

const Blog = () => {
  return (
    <Box style={styles.page}>
      <Routes>
        <Route path="/" element={<BlogMain />} />
        <Route path="/blogPageOne" element={<BlogPageOne />} />
        <Route path="/blogPageTwo" element={<BlogPageTwo />} />
      </Routes>
    </Box>
  );
};

export default Blog;

let styles = {
  page: {
    marginTop: '80px',
  },
};
