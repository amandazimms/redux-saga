import React, { useState } from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import { Checkbox, Form, Segment } from 'semantic-ui-react';

function NewEntryForm(props) {
  const addEntry = props.addEntry;

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);

  return (
    <Form unstackable>
    <Form.Group>
      <Form.Input 
        icon="tags"
        width={12}
        label="Description"
        placeholder="New shiny thing"
        value={description}
        onChange={ (event)=>setDescription(event.target.value) }
      />
      <Form.Input
        icon="dollar" 
        iconPosition="left"
        width={4}
        label="Value"
        placeholder="100.00"
        value={value}
        onChange={ (event)=>setValue(event.target.value) }
      />
    </Form.Group>

    <Segment compact>
      <Checkbox 
        toggle 
        label='is expense' 
        checked={isExpense}
        onChange={ ()=>setIsExpense((oldState)=> !oldState) }
      />
    </Segment>
    
    <ButtonSaveOrCancel 
      addEntry={addEntry} 
      description={description} 
      value={value} 
      isExpense={isExpense}
    />
  </Form>
  )
}

export default NewEntryForm
