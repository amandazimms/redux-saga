import { call, fork, put, take } from "@redux-saga/core/effects";
import entryTypes from "../Actions/Entries.Actions";
import axios from "axios";

export function* getAllEntries() {
  yield take(entryTypes.GET_ENTRIES);
  console.log('i need to get the entries now');
  const result = yield call(axios, 'http://localhost:3001/entries');
  console.log('res:', result);
  yield put({ type: entryTypes.POPULATE_ENTRIES, payload: result.data });
}

export function* getEntryDetails(id){
  const {data} = yield call (axios, `http://localhost:3001/values/${id}`);
  //this ^ destructuring means to get the thing.data. normally you would call it result,
  //and then use result.data somewhere. this allows you to directly use the data property.
  console.log('data:', data);
  yield put({ type: entryTypes.POPULATE_ENTRY_DETAILS, payload:{id: id, entry:data} });
}

export function* getAllEntriesDetails(){
  const {payload} = yield take(entryTypes.POPULATE_ENTRIES);
  for (let i=0; i<payload.length; i++){
    const entry = payload[i];
    yield fork(getEntryDetails, entry.id);
  }
}