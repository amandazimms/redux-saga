import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel(props) {
  const addEntry = props.addEntry;
  const description = props.description;
  const value = props.value;
  const isExpense = props.isExpense

  return (
    <Button.Group style={{marginTop: 20}}>
      <Button>Cancel</Button>
      <Button.Or/>
      <Button primary onClick={ ()=>addEntry(description, value, isExpense) }>OK</Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCancel
