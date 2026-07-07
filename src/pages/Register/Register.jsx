import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Heading,
} from '@chakra-ui/react';
import { centerContainerStyles, CustomInput } from 'services/stylesChakra';
import toast from 'react-hot-toast';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
        name,
        email,
        password,
      };

      await dispatch(register(submitData)).unwrap();

      toast.success('Account created successfully!');
      resetForm();
    } catch (error) {
      toast.error(error?.message || 'Registration failed.');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box pt={30}>
      <Heading as="h2" fontSize={['24px', '28px', '30px']} mb={10}>
        Register a new account
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl
          {...centerContainerStyles}
          flexDirection={'column'}
          gap={3}
        >
          <FormHelperText color={'text'} fontSize={24}>
            Name
          </FormHelperText>
          <CustomInput
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleInputChange}
            required
            autoComplete="off"
          />
          <FormHelperText color={'text'} fontSize={24}>
            Email
          </FormHelperText>
          <CustomInput
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            required
            autoComplete="off"
          />
          <FormHelperText color={'text'} fontSize={24}>
            Password
          </FormHelperText>
          <CustomInput
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
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
            Send
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
