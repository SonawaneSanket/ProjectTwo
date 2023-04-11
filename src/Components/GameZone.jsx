import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Assets/15.jpg';
import img3 from '../Assets/18.jpg';
import img4 from '../Assets/19.jpg';
import img5 from '../Assets/20.jpg';
import img6 from '../Assets/21.jpg';
import img7 from '../Assets/22.jpg';
import img8 from '../Assets/23.jpg';
import img9 from '../Assets/25.png';
const Options = {
  pos: 'absolute',
  left: '0%',
  top: '20%',
  right: ' 0%',
  textTransform: 'uppercase',
  p: '6',
  size: 'l',
};

const GameZone = () => {
  return (
    <>
      <Box h={'80vh'} w={'fit-content'}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          <Box w={'full'} h={'100vh'}>
            <Image src={img1}></Image>
          </Box>
          <Box>
            <Image src={img3}></Image>
          </Box>
          <Box>
            <Image src={img4}></Image>
          </Box>
          <Box>
            <Image src={img5}></Image>
          </Box>
          <Box>
            <Image src={img6}></Image>
          </Box>
          <Box>
            <Image src={img7}></Image>
          </Box>
          <Box>
            <Image src={img8}></Image>
          </Box>
        </Carousel>
      </Box>
      <Box w={'full'} h={'30vh'}>
        <Heading
          {...Options}
          color={'blackAlpha.900'}
          fontFamily={'sans-serif'}
          bgColor={'whatsapp.300'}
          opacity={0.7}
        >
          {' '}
          Welcome to our gaming website! Join our community of gamers, play a
          variety of games and stay up to date with the latest gaming news and
          reviews.{' '}
        </Heading>
        <Button left={'43%'} top={'-40%'} colorScheme="whatsapp">
          Sign Up
        </Button>
        <Button left={'45%'} top={'-40%'} colorScheme="blue">
          Log In
        </Button>
      </Box>
      <Container minHeight={'50vh'} maxWidth={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img9}
            h={['30', '200']}
            filter={'hue-rotate(-90deg)'}
          ></Image>
          <Text
            letterSpacing={'wider'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to our Esports website, your hub for all things competitive
            gaming! We are dedicated to bringing you the latest news, in-depth
            analysis, and comprehensive coverage of Esports events from around
            the world. Whether you're a casual gamer, an aspiring professional,
            or simply a fan of Esports, you'll find something here to satisfy
            your gaming cravings. Explore our player profiles to learn more
            about the talented individuals who compete at the highest level of
            Esports. Dive into our tournament coverage to stay updated on the
            latest results, highlights, and drama from epic competitions. And
            check out our in-depth articles and features for insightful analysis
            on the games, strategies, and trends shaping the Esports landscape.
            Join us as we celebrate the passion, excitement, and skill of
            Esports. Be part of the rapidly growing global community that is
            redefining modern entertainment. Welcome to our Esports website,
            your destination for all things competitive gaming!
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default GameZone;
