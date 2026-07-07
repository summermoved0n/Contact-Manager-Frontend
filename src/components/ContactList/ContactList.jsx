import { useDispatch, useSelector } from 'react-redux';
import ContactListItems from '../ContactListItems/ContactListItem';
import { removeContact } from '../../redux/contactsOperations';
import { selectVisibleContacts } from '../../redux/selectors';
import toast from 'react-hot-toast';
import { List } from '@chakra-ui/react';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const deleteContact = async (id, name) => {
    await dispatch(removeContact({ _id: id }))
      .unwrap()
      .then(() => {
        toast.success(`Removed '${name}'!`, {
          icon: '💔',
        });
      })
      .catch(error => {
        toast.error(error?.message || 'Login failed.');
      });
  };

  return (
    <List spacing={[3, 3, 2, 2, 2]} pt={[0, 0, 30]}>
      {filteredContacts.map(({ _id, name, phone }) => (
        <ContactListItems
          key={_id}
          id={_id}
          name={name}
          phone={phone}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
}
