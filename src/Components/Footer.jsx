import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'whitesmoke'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} width={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            We Handle Your Query Here
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Type Email Here"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'purple.600'}
            ></Input>
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'}></AiOutlineSend>
            </Button>
          </HStack>
        </VStack>
        <VStack
          width={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'}  textAlign={'center'}>
          Epic PlayZone
          </Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack width={'full'}>
          <Heading size={'md'}>Connect Us </Heading>
          <HStack>
            <Button variant={'link'} colorScheme={'linkedin'}>
              <a
                target="blank"
                href="https://www.linkedin.com/in/sanket-sonawane-484a06156/"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant={'link'} colorScheme='purple'>
              <a
                target="blank"
                href="https://vercel.com/dashboard"
              >
                Vercel
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'green'}>
              <a
                target="blank"
                href="https://www.linkedin.com/in/sanket-sonawane-484a06156/"
              >
                GitHub
              </a>
            </Button>
          </HStack>{' '}
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
