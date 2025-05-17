import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BergkvaraDashboard from "./pages/BergkvaraDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/bergkvara" element={<BergkvaraDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
