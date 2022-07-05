import "./styles/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm.js";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard.js";
import UserDashboard from "./pages/user-dashboard/UserDashboard.js";
import Login from "./pages/login-signup/Login.jsx";
import Signup from "./pages/login-signup/Signup.jsx";
import OTP from "./pages/login-signup/OTP.jsx";

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
          <Route exact path="/OTP" element={<OTP />} />
          <Route exact path="/form" element={<VerificationForm />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/UserDashboard" element={<UserDashboard />} />
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
