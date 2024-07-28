import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/landingPage'
import Marquee from './components/marquee'
import About from './components/about'
import Eyes from './components/eyes'
import Featured from './components/featured'
import Cards from './components/cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen text-[#212121] bg-[#F1F1F1] '>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Featured></Featured>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  )
}

export default App