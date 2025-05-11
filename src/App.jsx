import React from 'react'
import Header from './components/Header'

import { Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Logistique from './components/pages/Logistique'
import Rse from './components/pages/Rse'
import Rejoindre from './components/pages/Rejoindre'
import News from './components/pages/News'
import Footer from './components/Footer'


function App() {


  return (
    <>
     <Header />
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
