import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        padding={'0'}
        width={'10'}
        height={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'25'}></BiMenuAltLeft>
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay></DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>EpicPlayZone</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos'}>Movies & WebSeries</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/anime'}>Anime</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/gamezone'}>Gaming Zone</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/metaverse'}>Metaverse</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'center'}
            >
              <Button onClick={onClose} colorScheme="purple" variant={'solid'}>
                <Link to={'login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to={'signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
