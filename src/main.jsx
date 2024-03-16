import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Route>
        <Routes>
        <Route path='/*' element={<App/>} />
        </Routes>
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
)
