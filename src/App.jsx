import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <>
      <Analytics />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Hero />
                <ShowcaseSection />
                <LogoSection />
                <FeatureCards />
                <ExperienceSection />
                <TechStack />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
