import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm";
import Admin from "./pages/admin.js";
import DocumentVerification from "./pages/DocumentVerification/DocumentVerification";
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin/>}/>
          <Route path="/form" element={<VerificationForm/>}/>
          <Route path="/verifydoc" element={<DocumentVerification/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
