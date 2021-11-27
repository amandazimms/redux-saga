const reducer = (state = {}, action) => {
  if( action.type ==='OPEN_EDIT_MODAL'){
    return {...state, isOpen: true, id: action.payload.id};
  }
  else if( action.type ==='CLOSE_EDIT_MODAL'){
    return {...state, isOpen: false, id: action.payload.id};
  }
  return state;
}

export default reducer; 