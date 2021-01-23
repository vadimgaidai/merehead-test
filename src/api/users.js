export default ({ axios }) => ({
  getUsers() {
    return axios.get('users')
  },
  getUser(userId) {
    return axios.get(`user/${userId}`)
  },
})
