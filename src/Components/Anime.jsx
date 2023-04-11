import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import imgpokemon from '../Assets/27.png';
const Anime = () => {
  return (
    <Box>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
      >
        <Box>
          <Image src={imgpokemon} filter={'hue-rotate(30deg)'}></Image>
        </Box>
      </Carousel>
    </Box>
  );
};

export default Anime;
