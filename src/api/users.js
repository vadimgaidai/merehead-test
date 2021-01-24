export default ({ axios }) => ({
  getUsers(page) {
    return axios.get('users', { params: { page, per_page: 4 } })
  },
  getUser(userId) {
    return axios.get(`users/${userId}`)
  },
  setUser(data) {
    return axios.post('users', { ...data })
  },
  changeUser(userId, data) {
    return axios.put(`users/${userId}`, { ...data })
  },
  deleteUser(userId) {
    return axios.delete(`users/${userId}`)
  },
})
