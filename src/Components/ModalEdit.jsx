import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import NewEntryForm from './NewEntryForm';

//popup for editing entries
function ModalEdit(props) {
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;

  return ( 
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
       <NewEntryForm />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={ ()=>setIsOpen(false) }>Close</Button>
      </Modal.Actions>
    </Modal> 
  );
}

export default ModalEdit
