import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { centerContainerStyles, CustomInput } from 'services/stylesChakra';
import { FormControl, FormLabel } from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  const inputFilterId = useId();

  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <FormControl mt={5} {...centerContainerStyles}>
      <FormLabel m={0} htmlFor={inputFilterId}>
        <CustomInput
          type="text"
          name="filter"
          id={inputFilterId}
          placeholder="Search by name"
          onChange={handleFilter}
        />
      </FormLabel>
    </FormControl>
  );
}
