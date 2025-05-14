import React from 'react'
import { useEffect } from 'react';
import MainHero from '../MainHero';
import About from '../About';
import Services from '../services/Services';
import Slider from '../slider/Slider';
import Action from '../Action';
import Banner from '../Banner';
import Qhse from '../Qhse';
import Projects from '../Projects';
import ContactUs from '../ContactUs';
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";
import useScrollAnimations from "../../hooks/useScrollAnimations";

const Home = () => {
  useGlobalTitleAnimations();
  useScrollAnimations();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // petit délai pour que le DOM soit prêt
      }
    }
  }, []);

  return (
    <>
      <MainHero />
      <About />
      <Banner />
      <Services />
      <Slider />
      <Action />
      <Qhse />
      <Projects />
      <ContactUs />
    </>
  )
}

export default Home
