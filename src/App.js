import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm";
import Admin from "./pages/admin.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin/>}/>
          <Route path="/form" element={<VerificationForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
