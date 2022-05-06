import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationForm from "./pages/form/VerificationForm";
import Home from "./pages/Home.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<VerificationForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
