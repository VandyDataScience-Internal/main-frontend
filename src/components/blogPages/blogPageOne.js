// Font Update
import '@fontsource/open-sans/700.css';
import blogPDF from '../../assets/newsletters/3_31_23.pdf';

import React from 'react';

const blogPageOne = () => {
  return (
    <object width="100%" height="750" data={blogPDF} type="application/pdf">
      {''}
    </object>
  );
};

export default blogPageOne;
