import { call, put, take } from "@redux-saga/core/effects";
import entryTypes from "../Actions/Entries.Actions";
import axios from "axios";

export function* getAllEntries() {
  yield take(entryTypes.GET_ENTRIES);
  console.log('i need to get the entries now');
  const result = yield call(axios, 'http://localhost:3001/entries');
  console.log('res:', result);
  yield put({ type: entryTypes.POPULATE_ENTRIES, payload: result.data });
}