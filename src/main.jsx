import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { worker } from './mocks/browser'

// This is just a demo project, so it's fine starting the worker this way :)
// Don't do it on PRODUCTION!
function prepare() {
  return worker.start()
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
