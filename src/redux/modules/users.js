import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: {},
    pagination: {},
  },
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload.data
      state.pagination = {
        page: payload.page,
        total: payload.total,
        perPage: payload.per_page,
        totalPages: payload.total_pages,
      }
    },
    setUser(state, { payload }) {
      state.user = payload
    },
  },
})

export const { setUsers, setUser } = actions
export default reducer
