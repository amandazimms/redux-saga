import React, { useState } from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function NewEntryForm(props) {
  const addEntry = props.addEntry;

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);

  return (
    <Form unstackable>
     <EntryForm 
      description={description} 
      value={value} 
      isExpense={isExpense}
      setDescription={setDescription} 
      setValue={setValue}
      setIsExpense={setIsExpense}
    />
  
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
