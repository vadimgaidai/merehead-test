export default ({ axios }) => ({
  getUsers() {
    return axios.get('users')
  },
  getUser(userId) {
    return axios.get(`user/${userId}`)
  },
  setUser(data) {
    return axios.post('users', { ...data })
  },
})
