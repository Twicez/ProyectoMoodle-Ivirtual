import React from 'react'
import ReactDOM from 'react-dom/client'
import UserList from './components/UserList.jsx'
import HomePage from './components/HomePage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
