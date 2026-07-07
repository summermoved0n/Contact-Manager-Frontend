import { Box, Text } from '@chakra-ui/react';
import { HomeLink, MainTitle } from 'services/styledComponents';
import { CustomImage } from 'services/stylesChakra';

export default function Home() {
  return (
    <Box pt={30} pb={30}>
      <MainTitle>Welcome to Phonebook</MainTitle>

      <CustomImage>
        <Box
          borderRadius={10}
          bgColor={'rgba(0, 0, 0, 0.15)'}
          w={'100%'}
          h={'100%'}
        ></Box>
      </CustomImage>

      <Text>
        If you are visiting for the first time, please{' '}
        <HomeLink to="/register">register</HomeLink>, or{' '}
        <HomeLink to="/login">log in</HomeLink> to an existing account.
      </Text>
    </Box>
  );
}
