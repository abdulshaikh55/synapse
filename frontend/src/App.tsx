import Navbar from "./layout/Navbar/Navbar";
import "./App.css";
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupLogin from "./pages/SignupLogin/SignupLogin";
import Contact from "./pages/ContactUs/Contact";
import { SurveyForm } from "./pages/SurveyForm/SurveyForm";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./layout/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import SearchedCourses from "./pages/SearchedCourses/SearchedCourses";
import UserProfile from "./pages/UserProfile/UserProfile";
import Course from "./components/Course/Course";
import { CourseProvider } from "./context/CourseContext";

function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signupLogin" element={<SignupLogin />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/surveyForm" element={<SurveyForm />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<Course />} />
            <Route path="/searchedCourses" element={<SearchedCourses />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;
