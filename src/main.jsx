import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import App from './App.jsx'
import MedicalVirtualAssistant from './pages/MedicalVirtualAssistant.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/articles/medical-virtual-assistant"
          element={<MedicalVirtualAssistant />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)