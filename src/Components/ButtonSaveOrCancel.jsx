import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel(props) {
  const addEntry = props.addEntry;
  const description = props.description;
  const value = props.value;

  return (
    <Button.Group style={{marginTop: 20}}>
      <Button>Cancel</Button>
      <Button.Or/>
      <Button primary onClick={ ()=>addEntry(description, value) }>OK</Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCancel
