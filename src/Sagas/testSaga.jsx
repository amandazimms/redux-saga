import {delay} from 'redux-saga/effects';

export function* testSaga() {
  while(true) {
    yield delay(1000); //wait for one second, then...
    console.log("I'm a saga");
  }
}

export function* count() {
  yield 1
  yield 2
  yield 3
  yield 4
}