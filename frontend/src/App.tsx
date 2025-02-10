import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupLogin from "./pages/SignupLogin/SignupLogin";
import Contact from "./pages/ContactUs/Contact";
import { SurveyForm } from "./pages/SurveyForm/SurveyForm";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Courses from "./pages/Courses/Courses";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signupLogin" element={<SignupLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/surveyForm" element={<SurveyForm />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
