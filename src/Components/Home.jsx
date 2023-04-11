import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../Assets/26.jpg';
import img2 from '../Assets/3.jpg';
import img3 from '../Assets/28.jpg';
import img4 from '../Assets/13.jpg';
import img5 from '../Assets/12.png';

const headingOptions = {
  pos: 'absolute',
  left: '20%',
  top: '10%',
  trasform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'fit-content'} h={'80vh'}>
          <Image src={img1} />
          <Heading
            bgColor={'purple.400'}
            color={'blackAlpha.900'}
            size={'lg'}
            position={'absolute'}
            left={'0%'}
            top={'78%'}
            p={'4'}
            opacity={0.7}
          >
            Enter the metaverse, a fully immersive digital world where anything
            is possible. Connect with others, attend virtual events, and
            experience endless possibilities. Join today and discover a world
            beyond your wildest dreams.
          </Heading>
        </Box>
        <Box w={'full'} h={'80vh'}>
          <Image src={img2} />
          <Heading
            bgColor={'whiteAlpha.500'}
            color={'blackAlpha.800'}
            {...headingOptions}
            left={'0%'}
            top={'80%'}
            size={'md'}
          >
            Welcome to our Esports Community! If you're passionate about
            competitive gaming, this is the place to be. Join us and connect
            with fellow esports enthusiasts from around the world. Participate
            in tournaments, discuss your favorite games and strategies, and stay
            updated on the latest esports news and events. Join our community of
            skilled gamers and be part of an exciting and competitive gaming
            community! #EsportsCommunity #JoinUsNow{' '}
          </Heading>
        </Box>
        <Box w={'full'} h={'80vh'}>
          <Image src={img3} />
          <Heading
            bgColor={'purple.400'}
            color={'blackAlpha.900'}
            {...headingOptions}
            top={'87%'}
            left={'0%'}
            size={'md'}
            opacity={0.9}
          >
            Indulge in manga and anime! Join us to discuss, recommend, and
            celebrate the best of both worlds. Share your favorite manga and
            anime, connect with fellow enthusiasts, and join our community of
            passionate fans. #MangaAnimeEnthusiasts #JoinUsNow{' '}
          </Heading>
        </Box>
        <Box w={'full'} h={'80vh'}>
          <Image src={img4} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'whiteAlpha.900'}
            {...headingOptions}
            top={'30%'}
            left={'20%'}
            size={'lg'}
          >
            "Epic PlayZone - Movies & Webseries Unleashed!"{' '}
          </Heading>
          <Heading
            bgColor={'blackAlpha.600'}
            color={'whiteAlpha.900'}
            {...headingOptions}
            top={'50%'}
            left={'20%'}
            size={'lg'}
          >
            Get Theater Like Experience{' '}
          </Heading>
          <Heading
            bgColor={'blackAlpha.600'}
            color={'whiteAlpha.900'}
            {...headingOptions}
            top={'61.4%'}
            left={'20%'}
            size={'lg'}
          >
            On Our Platform{' '}
          </Heading>
        </Box>
      </Carousel>
      <Container minHeight={'80vh'} maxWidth={'container.xl'} p={'16'}>
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
            src={img5}
            h={['30', '300']}
            filter={'hue-rotate(-90deg)'}
          ></Image>
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            We offer a personalized experience through our recommendation
            algorithms, which suggest movies, anime, and games based on your
            viewing and playing history, as well as your preferences. This
            ensures that you always have something new and exciting to discover
            on our website. In addition, we provide comprehensive coverage of
            major events and conventions related to movies, anime, metaverse,
            and gaming, including news updates, photos, and video highlights.
            This makes our website a go-to source for the latest happenings in
            the entertainment industry. Overall, our website is a dynamic and
            engaging platform that offers a range of entertainment options and
            fosters a community of enthusiasts. Come and join us in the world of
            movies, anime, metaverse, and gaming!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
