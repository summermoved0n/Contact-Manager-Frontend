import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  Box,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { selectAuthLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const BurgerMenu = ({ isOpen, onClose }) => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader fontSize={32} color={'black'}>
          Menu
        </DrawerHeader>
        <DrawerBody
          color={'black'}
          fontSize={24}
          display={'flex'}
          flexDirection={'column'}
          gap={8}
        >
          <Text onClick={onClose} h={27} w={58} _hover={{ color: 'blue' }}>
            <Link to="/">Home</Link>
          </Text>

          {isLoggedIn && (
            <Text onClick={onClose} h={27} w={116} _hover={{ color: 'blue' }}>
              <Link to="/contacts">Contacts</Link>
            </Text>
          )}

          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <Box display={'flex'} flexDirection={'column'} gap={10}>
              <Text onClick={onClose} h={27} w={73} _hover={{ color: 'blue' }}>
                <Link to="/login">Login</Link>
              </Text>
              <Text
                onClick={onClose}
                h={27}
                w={116}
                _hover={{ color: 'blue' }}
              >
                <Link to="/register">Register</Link>
              </Text>
            </Box>
          )}
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
