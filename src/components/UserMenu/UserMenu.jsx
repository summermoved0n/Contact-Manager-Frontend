import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import { Box, Button, Text } from '@chakra-ui/react';
import { buttonsStyles, centerContainerStyles } from 'services/stylesChakra';

export const UserMenu = () => {
  const { email } = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  return (
    <Box
      {...centerContainerStyles}
      flexDirection={['column', 'column', 'row']}
      gap={2}
    >
      <Text
        borderRadius={5}
        border={['none', 'none', '1px solid white']}
        p={['2px', '2px', '2px 5px']}
        bgColor={['text', 'text', 'transparent']}
      >
        {email}
      </Text>
      <Button
        h={30}
        {...buttonsStyles}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
