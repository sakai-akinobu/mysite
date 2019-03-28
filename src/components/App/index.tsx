import * as React from 'react';
import {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

import AboutMe from '../AboutMe';
import TechnologyStack from '../TechnologyStack';
import SocialLink from '../SocialLink';
import Footer from '../Footer';

export default function App() {
  useEffect(() => {
    ScrollReveal().reveal('.transition', {
      origin: 'top',
      distance: '10px',
      duration: 800,
      delay: 500,
      easing: 'ease',
      reset: true,
    });
  }, []);

  return (
    <>
      <AboutMe />
      <TechnologyStack />
      <SocialLink />
      <Footer />
    </>
  );
}
