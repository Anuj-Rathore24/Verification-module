import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import Home from "./pages/Home.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<VerificationForm/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
