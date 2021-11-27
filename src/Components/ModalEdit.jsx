import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm';

//popup for editing entries
function ModalEdit(props) {
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;

  const editEntry = props.editEntry;

  const description = props.description;
  const value = props.value;
  const isExpense = props.isExpense;
  const setDescription = props.setDescription;
  const setValue = props.setValue;
  const setIsExpense = props.setIsExpense;

  return ( 
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
       <EntryForm 
        description={description} 
        value={value} 
        isExpense={isExpense}
        setDescription={setDescription} 
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={ ()=>setIsOpen(false) }>Close</Button>
        <Button onClick={ ()=>setIsOpen(false) } primary>Ok</Button>
      </Modal.Actions>
    </Modal> 
  );
}

export default ModalEdit
