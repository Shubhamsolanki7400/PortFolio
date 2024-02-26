import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "../src/components/Testimonials"
import Footer from "./components/Footer";
import Experience from "../src/components/Experience"
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return ratio < 3 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (
    <em id="customMessage">Please Change the ratio to View!</em>
  );
}

export default App;