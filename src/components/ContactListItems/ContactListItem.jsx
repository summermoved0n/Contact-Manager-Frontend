import { Box, Button, ListItem, Text } from '@chakra-ui/react';
import { buttonsStyles } from 'services/stylesChakra';

export default function ContactListItem({ id, name, phone, deleteContact }) {
  return (
    <ListItem
      bgColor={['text', 'text', 'transparent']}
      borderRadius={5}
      border={['none', 'none', '1px solid white', 'none']}
      display={'flex'}
      flexDirection={['column', 'row', 'row']}
      gap={[0, 2, 4, 8, 12]}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={['4px 8px', '4px 8px', '0 10px']}
    >
      <Box
        display={'flex'}
        flexDirection={['column', 'column', 'column', 'row']}
        justifyContent={'space-between'}
        alignItems={['center', 'flex-start', 'flex-start', 'center']}
        flexWrap={'wrap'}
        gap={[0, 0, 0, 2, 4]}
        w={[180, 180, 180, 400, 420]}
      >
        <Text
          color={['black', 'black', 'text']}
          fontWeight={600}
          fontSize={[16, 16, 20, 22, 26]}
        >
          {name}:
        </Text>
        <Text
          color={['input', 'input', 'text']}
          fontSize={[16, 16, 18, 18, 20]}
        >
          {phone}
        </Text>
      </Box>
      <Button
        type="button"
        h={30}
        bgColor={['transparent', 'transparent', 'text']}
        border={['1px solid black', '1px solid black', 'none']}
        {...buttonsStyles}
        onClick={() => deleteContact(id, name)}
      >
        Delete
      </Button>
    </ListItem>
  );
}
