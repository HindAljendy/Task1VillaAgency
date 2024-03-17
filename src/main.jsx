import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const subdirectory ='/Task1VillaAgency';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename = {subdirectory}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
