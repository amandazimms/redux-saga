import React from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import useEntryDetails from '../Hooks/UseEntryDetails';

function NewEntryForm() {
  const {
    description, //<- ES6, means description: description
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry
  } = useEntryDetails();

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
