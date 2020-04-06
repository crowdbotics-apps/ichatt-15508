import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth26194Saga from '../features/EmailAuth26194/redux/sagas';
import CalendarView26192Saga from '../features/CalendarView26192/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth26194Saga,
CalendarView26192Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}