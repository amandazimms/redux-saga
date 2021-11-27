import React from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function NewEntryForm(props) {
  const addEntry = props.addEntry;
  const description = props.description;
  const value = props.value;
  const isExpense = props.isExpense;
  const setDescription = props.setDescription;
  const setValue = props.setValue;
  const setIsExpense = props.setIsExpense;

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
  
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  )
}

export default NewEntryForm
