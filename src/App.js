import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm";
<<<<<<< HEAD
import Admin from "./pages/admin.js";
import DocumentVerification from "./pages/DocumentVerification/DocumentVerification";
import 'semantic-ui-css/semantic.min.css';
=======
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import Home from "./pages/Home.js";
>>>>>>> 7cbf46ed45e2b93dfdce911b2fb98a9bc7a01507

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<VerificationForm/>}/>
<<<<<<< HEAD
          <Route path="/verifydoc" element={<DocumentVerification/>}/>
=======
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/UserDashboard" element={<UserDashboard/>}/>
>>>>>>> 7cbf46ed45e2b93dfdce911b2fb98a9bc7a01507
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
