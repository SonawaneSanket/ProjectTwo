import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import videodemo from '../Assets/sample.mp4';
import { Carousel } from 'react-responsive-carousel';
import imgdemo from '../Assets/9.png';



const Options = {
  pos: 'absolute',
  left: '15%',
  top: '18%',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Metaverse = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <>
      <Box h={'40vh'} w={'fit-content'}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
        >
          <video src={videodemo} ref={vidRef} muted autoPlay loop />
        </Carousel>
      </Box>
      <Box w={'full'} h={'60vh'}>
        <Heading {...Options} color={'navajowhite'} fontFamily={'sans-serif'}>
          {' '}
          Welcome to The World of Metaverse
        </Heading>
        <Button left={'43%'} top={'44%'} colorScheme="whatsapp">
          Sign Up
        </Button>
        <Button left={'44%'} top={'44%'} colorScheme="blue">
          Log In
        </Button>
      </Box>
      <Box w={'full'} h={'130vh'}>
        <Container minHeight={'80vh'} maxWidth={'container.xl'} p={'32'}>
          <Heading
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
            m={'auto'}
          >
            Services
          </Heading>
          <Stack>
            h={'full'}
            p={'5'}
            alignItems={'center'}
            direction={['column', 'row']}
            <Image
              src={imgdemo}
              h={['40', '400']}
              filter={'hue-rotate(-130deg)'}
              m={'10'}
            ></Image>
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              tincidunt, lectus nec convallis fringilla, libero libero egestas
              libero, non consectetur lorem dolor vitae massa. Etiam
              pellentesque, elit ac consectetur eleifend, leo mauris accumsan
              nunc, at rhoncus mi velit eget dui. Vestibulum justo neque,
              consequat at venenatis non, ornare non nulla. Vivamus congue dui
              suscipit cursus porttitor. Vivamus ac laoreet turpis, in fermentum
              erat. Vivamus dictum ex nunc, ac sagittis est eleifend sit amet.
              Phasellus et velit
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Metaverse;
