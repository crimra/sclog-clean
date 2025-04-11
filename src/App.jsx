import { useState } from 'react'
import Header from './components/Header'
import About from './components/about/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <About />
    </>
  )
}

export default App
