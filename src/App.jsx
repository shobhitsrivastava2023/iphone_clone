import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import Footer from './components/Footer'
const App = () => {
 

  return (
    <>
   <main className='bg-black'>

    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <Footer />
    

   </main>
      
    </>
  )
}

export default App
