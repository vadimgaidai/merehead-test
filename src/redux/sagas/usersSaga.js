import { call, put } from 'redux-saga/effects'
import { setUser, setUsers } from '../modules/users'

const loadUsers = async () => {
  const { data } = await window.$api.users.getUsers()
  return data
}

export function* loadUsersSaga() {
  try {
    const { data } = yield call(() => loadUsers())
    yield put(setUsers(data))
  } catch (e) {
    console.error(e)
  }
}

const loadUser = async () => {
  const { data } = await window.$api.users.getUser()
  return data
}

export function* loadUserSaga() {
  try {
    const { data } = yield call(() => loadUser())
    yield put(setUser(data))
  } catch (e) {
    console.error(e)
  }
}
