import {
  Button,
  Container,
  HStack,
  Input,
  VStack,
  color,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.600'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}></AiOutlineCloudUpload>
        <form action="">
          <HStack>
            <Input
              required
              type="file"
              css={{
                //Using Psudo selector
                '&::file-selector-button': {
                  border: 'none',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'whitesmoke',
                  cursor: 'pointer',
                },
              }}
            ></Input>
            <Button colorScheme={'purple'} type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
