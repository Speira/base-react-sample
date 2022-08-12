import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import constants from '~utils/constants'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: constants.WORDS.FRENCH.VALUES,
    },
  },
  lng: 'fr', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
