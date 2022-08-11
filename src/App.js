import "./styles/App.css";
import { useEffect } from "react";
import {Routes, Route,HashRouter } from "react-router-dom";
import Login from "./pages/login-signup/Login.jsx";
import Signup from "./pages/login-signup/Signup.jsx";
import { ProtectedRoute1, ProtectedRoute2, ProtectedRoute3, ProtectedRoute4 } from './pages/login-signup/ProtectedRoute.jsx'//importing protected route 
import Spinner from "./pages/loader";



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
          <Route exact path="/admin" element={<ProtectedRoute4 />} />
          <Route exact path="/UserDashboard" element={<ProtectedRoute2 />} />
          <Route exact path="/loader" element={<Spinner />} />

      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
