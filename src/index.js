import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { axios } from './plugins/axios'
import store from './redux/store'
import api from './api/api'

import Header from './components/Header'
import App from './App'
import Footer from './components/Footer'

import reportWebVitals from './reportWebVitals'

import './assets/style/index.scss'

const loader = document.querySelector('.preloader')

api({ axios, store })

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

loader.classList.add('preloader--hide')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
