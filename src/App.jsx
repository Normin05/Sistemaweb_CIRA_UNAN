import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import InfoCampoForm from "./components/InfoCampoForm";
import SolicitudServiciosForm from "./components/SolicitudServiciosForm";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/info-campo" element={<InfoCampoForm />} />
        <Route path="/solicitud-servicio" element={<SolicitudServiciosForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
