var initialEntries = [
  {
    id:1,
    description:"VA Work",
    value:550,
    isExpense:false
  },
  {
    id:2,
    description:"Fiber Internet",
    value:60,
    isExpense:true
  },
  {
    id:3,
    description:"Vet Bill",
    value:92,
    isExpense:true
  },
  {
    id:4,
    description:"December Piano Lessons",
    value:975,
    isExpense:false
  }
]
const reducer = (state = initialEntries, action) => {    
  let newEntries;
  if (action.type === 'ADD_ENTRY'){
    newEntries = state.concat( {...action.payload} )
    return newEntries;
  }
  else if (action.type === 'REMOVE_ENTRY'){
    newEntries = state.filter(entry => entry.id !== action.payload.id);
    return newEntries;
  }
  else if (action.type === 'UPDATE_ENTRY'){
    newEntries = [...state];
    const index = newEntries.findIndex(entry => entry.id === action.payload.id);
    newEntries[index] = {...action.payload.entry};
    return newEntries;
  }
  return state;
};
export default reducer;
