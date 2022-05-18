import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm.js";
import DocumentVerification from "./pages/DocumentVerification/DocumentVerification.js";
// import 'semantic-ui-css/semantic.min.css';
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard.js";
import UserDashboard from "./pages/user-dashboard/UserDashboard.js";
import Home from "./pages/Home.js";
import Login from './pages/login-signup/Login.jsx'
import Signup from './pages/login-signup/Signup.jsx'
import OTP from './pages/login-signup/OTP.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<VerificationForm />} />
          {/* <Route path="/verifydoc" element={<DocumentVerification/>}/> */}
          {/* <Route path="/admindashboard" element={<AdminDashboard/>}/> */}
          <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
