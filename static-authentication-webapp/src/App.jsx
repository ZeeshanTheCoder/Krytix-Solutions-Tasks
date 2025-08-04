import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import ChangePassword from "./components/ChangePassword";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

function AppRoutes() {
  return (
      <>
      <Navbar />
        <Routes>
            <Route path="/" element={<Login />} errorElement={<ErrorBoundary />} />
            <Route path="/dashboard" element={<Dashboard />} errorElement={<ErrorBoundary />} />
            <Route path="/login" element={<Login />} errorElement={<ErrorBoundary />} />
            <Route path="/signup" element={<Signup />} errorElement={<ErrorBoundary />} />
            <Route path="/forget-password" element={<ForgetPassword />} errorElement={<ErrorBoundary />} />
            <Route path="/change-password" element={<ChangePassword />} errorElement={<ErrorBoundary />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </>
  );
}

export default AppRoutes;
