import { take, delay, put } from 'redux-saga/effects';
export function* testSaga() {
  while(true) {
    console.log("Starting saga");
    const state = yield take('TEST_MESSAGE'); //waits until we get this message 
    console.log("Finished saga", state);
  }
}

export function* dispatchTest() {
  while(true){
    yield delay(1000);
    yield put({ type: "TEST_MESSAGE", payload: 66 })
  }
}