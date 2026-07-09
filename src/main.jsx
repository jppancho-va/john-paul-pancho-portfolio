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
import ClientSuccessRevenueOps from './pages/ClientSuccessRevenueOps.jsx'
import EcommerceOperations from './pages/EcommerceOperations.jsx'
import CustomerServiceOperations from './pages/CustomerServiceOperations.jsx'

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

        {/* Article 4: Scaling High-Ticket Sales (RevOps) */}
        <Route
          path="/articles/client-success-revenue-ops"
          element={
            <MainLayout>
              <ClientSuccessRevenueOps />
            </MainLayout>
          }
        />

        {/* Article 5: From Checkout to Doorstep (E-Commerce Operations) */}
        <Route
          path="/articles/ecommerce-operations"
          element={
            <MainLayout>
              <EcommerceOperations />
            </MainLayout>
          }
        />

        {/* Article 6: Architecting the Perfect Helpdesk (Customer Service Ops) */}
        <Route
          path="/articles/customer-service-operations"
          element={
            <MainLayout>
              <CustomerServiceOperations />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)