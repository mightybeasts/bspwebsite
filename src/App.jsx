import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Partners } from './components';
import { useState, useEffect } from "react";
import RecruitmentPage from "./pages/RecruitmentPage";
import TornamentPage from "./pages/TornamentPage";
import DigitalrecruitPage from "./pages/DigitalrecruitPage";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recruit" element={<RecruitmentPage />} />
        {/* Add other routes if necessary */}
      
      <Route path="/tournaments" element={<TornamentPage/>}/>
      <Route path="/digitalrecruits" element={<DigitalrecruitPage/>}/>
      <Route path="/" element={
        <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />

        <Partners />
        <Experience />
        {isMobile ? ' ' : <Tech />}

        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
      }/>
        </Routes>
     
    </BrowserRouter>
  );
};

export default App;
