import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  AuthPage,
  Blog,
  Dashboard,
  Home,
  Portfolio,
  Services,
} from "./Page";
import { AuthProvider } from "./context/auth";
import ContactPage from "./Page/ContactPage";
import ForgotPasswordPage from "./Page/ForgotPasswordPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
