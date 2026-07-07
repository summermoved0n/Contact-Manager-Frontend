import { Box, Link, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box textAlign={'center'} mt={10}>
      <Text>
        © Created by{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/summermoved0n"
        >
          summermoved0n
        </Link>
      </Text>
    </Box>
  );
}
