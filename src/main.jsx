import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx'

// Article Page Imports
import Articles from './pages/Articles.jsx'
import MedicalVirtualAssistant from './pages/MedicalVirtualAssistant.jsx'
import MedicalVirtualAssistantWorkflow from './pages/MyDailyWorkflow.jsx'
import InsuranceVerificationWorkflow from './pages/InsuranceVerification.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Home / Portfolio Main Page */}
        <Route
          path="/"
          element={
            <MainLayout>
              <App />
            </MainLayout>
          }
        />

        {/* Articles Feed Directory */}
        <Route
          path="/articles"
          element={
            <MainLayout>
              <Articles />
            </MainLayout>
          }
        />

        {/* Article 1: What does a Medical Virtual Assistant do? */}
        <Route
          path="/articles/medical-virtual-assistant"
          element={
            <MainLayout>
              <MedicalVirtualAssistant />
            </MainLayout>
          }
        />

        {/* Article 2: My Daily Workflow as a Medical VA */}
        <Route
          path="/articles/my-daily-workflow"
          element={
            <MainLayout>
              <MedicalVirtualAssistantWorkflow />
            </MainLayout>
          }
        />

        {/* Article 3: How Insurance Verification Really Works */}
        <Route
          path="/articles/insurance-verification"
          element={
            <MainLayout>
              <InsuranceVerificationWorkflow />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)