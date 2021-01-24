export default ({ axios }) => ({
  getUsers(page) {
    console.log(page)
    return axios.get('users', { params: { page, per_page: 4 } })
  },
  getUser(userId) {
    return axios.get(`users/${userId}`)
  },
  setUser(data) {
    return axios.post('users', { ...data })
  },
})
