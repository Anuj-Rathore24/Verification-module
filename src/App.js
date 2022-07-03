import "./styles/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm.js";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard.js";
import UserDashboard from "./pages/user-dashboard/UserDashboard.js";
import Home from "./pages/Home.js";
import Login from './pages/login-signup/Login.jsx'
import Signup from './pages/login-signup/Signup.jsx'
import OTP from './pages/login-signup/OTP.jsx'

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/OTP" element={<OTP />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<VerificationForm />} />
          <Route path="/admin" element={<AdminDashboard/>}/>

          <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
