import { call, put } from 'redux-saga/effects'
import { setUser, setUsers } from '../modules/users'

const loadUsers = async (pageNumber) => {
  const { data } = await window.$api.users.getUsers(pageNumber)
  return data
}

export function* loadUsersSaga({ pageNumber }) {
  try {
    const payload = yield call(() => loadUsers(pageNumber))
    yield put(setUsers(payload))
  } catch (e) {
    console.error(e)
  }
}

const loadUser = async (userId) => {
  const { data } = await window.$api.users.getUser(userId)
  return data
}

export function* loadUserSaga({ userId }) {
  try {
    const { data } = yield call(() => loadUser(userId))
    yield put(setUser(data))
  } catch (e) {
    console.error(e)
  }
}
