
import "./App.css";
import HomePage from "../src/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OTPVerificationPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
