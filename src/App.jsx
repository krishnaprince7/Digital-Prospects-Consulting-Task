import React from 'react'
import Navbar from './componenets/Navebar'
import Home from './componenets/Home'
import Hire from './componenets/Hire'
import Technology from './componenets/Technology'
import Developer from './componenets/Developer'
import Footer from './componenets/Footer'
import HiringProcess from './componenets/HiringProcess'
import OurClients from './componenets/OurClients'


const App = () => {
  return (
   
    <>
    <Navbar />
    <Home />
    <Hire/>
    <Technology/>
    <Developer/>
    <HiringProcess/>
    <OurClients/>
    <Footer/>
    </>
  )
}

export default App