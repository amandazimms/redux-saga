import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react'
import { closeEditModal } from '../Actions/Modals.Actions';
import useEntryDetails from '../Hooks/UseEntryDetails';
import EntryForm from './EntryForm';

//popup for editing entries
function ModalEdit(props) {
  const isOpen = props.isOpen;

  const entry = props.entry;
  const description = props.description;
  const value = props.value;
  const isExpense = props.isExpense;
  const id = props.id;

  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);

  return ( 
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
       <EntryForm 
        description={entryUpdate.description} 
        value={entryUpdate.value} 
        isExpense={entryUpdate.isExpense}
        setDescription={entryUpdate.setDescription} 
        setValue={entryUpdate.setValue}
        setIsExpense={entryUpdate.setIsExpense}
      />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={ ()=>dispatch(closeEditModal()) }>Close</Button>
        <Button onClick={ ()=>entryUpdate.updateEntry(id) } primary>Ok</Button>
      </Modal.Actions>
    </Modal> 
  );
}

export default ModalEdit
