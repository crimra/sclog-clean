import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'

import Home from './components/pages/Home'
import Logistique from './components/pages/Logistique'
import Rse from './components/pages/Rse'
import Rejoindre from './components/pages/Rejoindre'
import News from './components/pages/News'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule le chargement 
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
     <Header />
     <ScrollToTop />
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/logistique' element={<Logistique />}/>
        <Route path='/rse' element={<Rse />}/>
        <Route path='/rejoindre' element={<Rejoindre />}/>
        <Route path='/news' element={<News />}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
