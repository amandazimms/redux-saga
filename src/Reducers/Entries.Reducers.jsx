import entryTypes from '../Actions/Entries.Actions';

var initialEntries = []

const reducer = (state = initialEntries, action) => {    
  let newEntries;
  if (action.type === entryTypes.POPULATE_ENTRIES){
    return action.payload;
  }
  if (action.type === entryTypes.POPULATE_ENTRY_DETAILS){
    newEntries = [...state];
    const index = newEntries.findIndex(entry => entry.id === action.payload.id);
    newEntries[index] = {...newEntries[index], ...action.payload.entry};
    return newEntries;
  }
  if (action.type === entryTypes.ADD_ENTRY){
    newEntries = state.concat( {...action.payload} )
    return newEntries;
  }
  else if (action.type === entryTypes.REMOVE_ENTRY){
    newEntries = state.filter(entry => entry.id !== action.payload.id);
    return newEntries;
  }
  else if (action.type === entryTypes.UPDATE_ENTRY){
    newEntries = [...state];
    const index = newEntries.findIndex(entry => entry.id === action.payload.id);
    newEntries[index] = {...newEntries[index], ...action.payload.entry};
    return newEntries;
  }
  return state;
};
export default reducer;
