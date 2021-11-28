import modalTypes from "../Actions/Modals.Actions";

const reducer = (state = {}, action) => {
  if( action.type === modalTypes.OPEN_EDIT_MODAL){
    return {...state, isOpen: true, id: action.payload.id};
  }
  else if( action.type === modalTypes.CLOSE_EDIT_MODAL){
    return {...state, isOpen: false, id: null };
  }
  return state;
}

export default reducer; 