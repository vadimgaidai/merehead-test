import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: {},
  },
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload
    },
    setUser(state, { payload }) {
      state.user = payload
    },
  },
})

export const { setUsers, setUser } = actions
export default reducer
