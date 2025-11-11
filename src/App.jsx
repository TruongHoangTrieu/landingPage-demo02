import "./App.css";
import HomePage from "../src/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import EmailVerificationSuccess from "./pages/EmailVerificationSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route
          path="/email-verification-success"
          element={<EmailVerificationSuccess />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
