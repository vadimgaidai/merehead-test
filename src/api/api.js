import users from './users'

export default ({ axios, store }) => {
  const api = {}
  const modules = {
    users,
  }
  Object.entries(modules).forEach(([key, value]) => {
    api[key] = value({ axios, store })
  })
  window.$api = api
}
