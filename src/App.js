import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm";
import DocumentVerification from "./pages/DocumentVerification/DocumentVerification";
import 'semantic-ui-css/semantic.min.css';
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
          {/* <Route path="/verifydoc" element={<DocumentVerification/>}/> */}
          {/* <Route path="/admindashboard" element={<AdminDashboard/>}/> */}
          <Route path="/UserDashboard" element={<UserDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
