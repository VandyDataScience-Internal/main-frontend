import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { Image, Box, Center, Link } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

// Define your custom "Next" arrow component
function NextArrow(props) {
  const { onClick } = props;
  return (
    <Box 
      onClick={onClick} 
      style={{ position: "absolute", top: "50%", right: "0", zIndex: 2, cursor: "pointer" }}
    >
      <ArrowForwardIcon boxSize={8} color="lightgray" />
    </Box>
  );
}

// Define your custom "Prev" arrow component
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Box 
      onClick={onClick} 
      style={{ position: "absolute", top: "50%", left: "0", zIndex: 2, cursor: "pointer" }}
    >
      <ArrowBackIcon boxSize={8} color="lightgray" />
    </Box>
  )
}

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ width: '60vw', margin: 'auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Center>
            <Link href={image.href}>
              <Image src={image.url} alt={`Item ${image.id}`} boxSize="20vw" objectFit="contain" />
              </Link>
            </Center>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

