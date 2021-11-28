import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from '../Actions/Entries.Actions';
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from "../Actions/Modals.Actions";

function useEntryDetails(desc="", val="", isExp=true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);

  const dispatch = useDispatch()

  useEffect(()=> {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id){
    dispatch(
      updateEntryRedux(
        id, //corresponds to entries.actions first param
        { id, description, value, isExpense }, //corresponds to entries.actions 2nd param
      ));
    dispatch(closeEditModal());
    resetValues();
  }

  function addEntry(){
    dispatch(addEntryRedux({
        id: uuidv4(),
        description, 
        value, 
        isExpense
    }));
    resetValues();
  }

  function resetValues(){
    setDescription('');
    setValue('');
    setIsExpense(true);
  }


  return{
    description, //<- ES6, means description: description
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry, 
    updateEntry,
  }
}

export default useEntryDetails
