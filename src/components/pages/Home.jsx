import React from 'react'
import About from '../About'
import Services from '../services/Services'
import Slider from '../slider/Slider';
import Action from '../Action'
import Banner from '../Banner'
import Qhse from '../Qhse';
import ContactUs from '../ContactUs';

const Home = () => {
  
  return (
    <>
    <About/>

    <Banner/>

    <Services />
    
    <Slider />

    <Action />

    <Qhse/>

    <ContactUs />
    
    </>
  )
}

export default Home
