import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
