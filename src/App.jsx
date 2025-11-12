import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import EmailVerificationSuccess from "./pages/EmailVerificationSuccess";
import DowloadPage from "./pages/DowloadPage";
import Layout from "./components/Layout";
import FeaturesPage from "./pages/FeaturesPage";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route
          path="/email-verification-success"
          element={<EmailVerificationSuccess />}
        />

        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DowloadPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/card" element ={<CardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
