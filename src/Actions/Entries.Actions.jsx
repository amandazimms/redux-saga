
  export const addEntryRedux = (payload) => {
    return {type: 'ADD_ENTRY', payload }; //<- with ES6 this is the same as payload: payload
  }

  export const removeEntryRedux = (id) => {
    return {type: 'REMOVE_ENTRY', payload: { id } };
  }

  export const updateEntryRedux = (id, entry) => {
    return {type: 'UPDATE_ENTRY', payload: { id, entry } };
  }