import { all, takeEvery } from 'redux-saga/effects'
import { LOAD_USERS, LOAD_USER } from './actionTypes'

import { loadUserSaga, loadUsersSaga } from './sagas/usersSaga'

export default function* rootSaga() {
  yield all([
    yield takeEvery(LOAD_USERS, loadUsersSaga),
    yield takeEvery(LOAD_USER, loadUserSaga),
  ])
}
