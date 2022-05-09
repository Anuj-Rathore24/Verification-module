import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import Home from "./pages/Home.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<VerificationForm/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/UserDashboard" element={<UserDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
