import axiosLib from 'axios'

const { REACT_APP_URL } = process.env

const instance = axiosLib.create({
  baseURL: REACT_APP_URL,
})

const responseFulfilled = (response) => {
  if (response) {
    return {
      data: response?.data,
      request: {
        status: response?.status,
        url: response?.request.responseURL,
        method: response?.config.method,
      },
    }
  }
  return {}
}

function responseRejected(error) {
  if (!error?.response) {
    return Promise.reject()
  }
  return Promise.reject(error.response)
}

instance.interceptors.response.use(responseFulfilled, responseRejected)

export const axios = instance
