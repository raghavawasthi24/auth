import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginCard from "../components/login-page";
import RegisterCard from "../components/register-page";
import VerifyOtpCard from "../components/verify-otp";
import Dashboard from "../components/dashboard";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginCard />} />
        <Route path="/register" element={<RegisterCard />} />
        <Route path="/verify-otp" element={<VerifyOtpCard />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
