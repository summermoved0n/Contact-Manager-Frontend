import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Heading,
} from '@chakra-ui/react';
import { centerContainerStyles, CustomInput } from 'services/stylesChakra';
import toast from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const submitData = {
        email,
        password,
      };
      await dispatch(logIn(submitData)).unwrap();
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error(error?.message || 'Login failed.');
    }
  };

  return (
    <Box pt={30}>
      <Heading as="h2" fontSize={['26px', '28px', '30px']} mb={10}>
        Login to your account
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl
          {...centerContainerStyles}
          flexDirection={'column'}
          gap={3}
        >
          <FormHelperText color={'text'} fontSize={24}>
            Email
          </FormHelperText>
          <CustomInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <FormHelperText color={'text'} fontSize={24}>
            Password
          </FormHelperText>
          <CustomInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <Button
            bgColor={'text'}
            mt={10}
            mb={10}
            color={'input'}
            transition={'color 250ms ease'}
            _hover={{
              color: 'blue',
            }}
            type="submit"
          >
            Login
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
