import "./styles/App.css";
import { useEffect } from "react";
import {Routes, Route,HashRouter } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm.js";
import AdminDashBoard from "./pages/admin-dashboard/AdminDashBoard.js";
import UserDashboard from "./pages/user-dashboard/UserDashboard.js";
import Login from "./pages/login-signup/Login.jsx";
import Signup from "./pages/login-signup/Signup.jsx";
import { ProtectedRoute1, ProtectedRoute2, ProtectedRoute3 } from './pages/login-signup/ProtectedRoute.jsx'//importing protected route 

function App() {
  
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <>
      <HashRouter >
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route path="/otp" element={<ProtectedRoute1/>}/> 
          <Route exact path="/form" element={<ProtectedRoute3 />} />
          <Route exact path="/admin" element={<AdminDashBoard />} />
          <Route exact path="/UserDashboard" element={<ProtectedRoute2 />} />
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
