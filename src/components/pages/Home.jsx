import React from 'react'
import MainHero from '../MainHero';
import About from '../About'
import Services from '../services/Services'
import Slider from '../slider/Slider';
import Action from '../Action'
import Banner from '../Banner'
import Qhse from '../Qhse';
import Projects from '../Projects';
import ContactUs from '../ContactUs';
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";

const Home = () => {
  useGlobalTitleAnimations();
  return (
    <>

    <MainHero />
    <About/>
    <Banner/>
    <Services />  
    <Slider />
    <Action />
    <Qhse/>
    <Projects />
    <ContactUs />
    
    </>
  )
}

export default Home
