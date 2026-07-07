import { useDispatch, useSelector } from 'react-redux';
import ContactListItems from '../ContactListItems/ContactListItem';
import { removeContact } from '../../redux/contactsOperations';
import { selectVisibleContacts } from '../../redux/selectors';
import toast from 'react-hot-toast';
import { List } from '@chakra-ui/react';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const deleteContact = (id, name) => {
    dispatch(removeContact(id))
      .unwrap()
      .then(() => {
        toast(`You deleted '${name}'!`, {
          icon: '💔',
        });
      })
      .catch(() => {
        toast.error('Oops, something went wrong!');
      });
  };

  return (
    <List spacing={[3, 3, 2, 2, 2]} pt={[0, 0, 30]}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItems
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
}
