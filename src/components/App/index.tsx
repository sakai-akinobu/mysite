import * as React from "react";
import { useEffect } from "react";

import AboutMe from "../AboutMe";
import TechnologyStack from "../TechnologyStack";
import GitHub from "../GitHub";
import Footer from "../Footer";

const App: React.FC = () => {
  useEffect(() => {
    ScrollReveal().reveal(".transition", {
      origin: "top",
      distance: "10px",
      duration: 800,
      delay: 500,
      easing: "ease",
      reset: true,
    });
  }, []);

  return (
    <>
      <AboutMe />
      <TechnologyStack />
      <GitHub />
      <Footer />
    </>
  );
};

export default App;
