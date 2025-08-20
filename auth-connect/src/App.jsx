import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import ChangePassword from "./components/ChangePassword";
import ForgetPassword from "./components/ForgetPassword";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    setIsLoggedIn(!!token);  
  }, []);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} errorElement={<ErrorBoundary />} />

        <Route 
          path="/login" 
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          } 
          errorElement={<ErrorBoundary />} 
        />

        <Route 
          path="/signup" 
          element={
            <ProtectedRoute>
              <Signup />
            </ProtectedRoute>
          } 
          errorElement={<ErrorBoundary />} 
        />

        <Route 
          path="/change-password" 
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          } 
          errorElement={<ErrorBoundary />} 
        />

        <Route 
          path="/forgot-password" 
          element={
            <ProtectedRoute>
              <ForgetPassword />
            </ProtectedRoute>
          } 
          errorElement={<ErrorBoundary />} 
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
