import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthLoggedIn,
} from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { StyledLink } from '../../services/styledComponents';

import { FaAddressBook } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  useDisclosure,
} from '@chakra-ui/react';

import {
  BurgerButton,
  mainContainerStyles,
  navigationStyles,
  centerContainerStyles,
} from 'services/stylesChakra';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import Footer from 'components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { Spinner } from 'components/Spinner/Spinner';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authLoading = useSelector(selectAuthLoading);

  return (
    <>
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <Box {...mainContainerStyles}>
        <Box {...navigationStyles}>
          <Box {...centerContainerStyles} gap={2}>
            <Text fontWeight={700} fontSize={22}>
              Phonebook
            </Text>
            <FaAddressBook size={22} color="#f7f7f7" />
          </Box>

          <Box>
            <BurgerButton onClick={onOpen} display={['flex', 'flex', 'none']}>
              <BsList size={26} color="#f7f7f7" />
            </BurgerButton>
            <BurgerMenu isOpen={isOpen} onClose={onClose} />
          </Box>

          <Breadcrumb display={['none', 'none', 'flex']} separator=" ">
            <BreadcrumbItem>
              <StyledLink to="/">Home</StyledLink>
            </BreadcrumbItem>
            {isLoggedIn && (
              <BreadcrumbItem>
                <StyledLink to="/contacts">Contacts</StyledLink>
              </BreadcrumbItem>
            )}
            {isLoggedIn ? (
              <BreadcrumbItem>
                <UserMenu />
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem {...centerContainerStyles} gap={3}>
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/register">Register</StyledLink>
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        {authLoading ? (
          <Box>
            <Spinner />
          </Box>
        ) : (
          <main>
            <Outlet />
          </main>
        )}
      </Box>
      <Footer />
    </>
  );
};
