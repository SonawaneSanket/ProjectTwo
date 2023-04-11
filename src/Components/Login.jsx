import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'6'}
          w={'96'}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'} color={'purple.600'}>
            Member login
          </Heading>

          <Input
            type="email"
            placeholder="Type E-mail Here"
            required
            focusBorderColor={'purple.600'}
          ></Input>
          <Input
            type="password"
            placeholder="Enter Your Password"
            required
            focusBorderColor={'purple.600'}
          ></Input>
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgotpassword'}>Forgot Password ?</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User ?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
