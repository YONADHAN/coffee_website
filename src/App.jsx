import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Navbar/Home';
import Services from './components/Navbar/Services';
import Banner from './components/Navbar/Banner';
import Contact from './components/Navbar/Contact';
const App = () => {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:700,
      easing:"ease-in",
      delay:100,
    })
  })
  return (
    <div className='overflow-x-hidden overflow-y-hidden select-none'>
      <Navbar/>
      <Home/>
      <Services/>
      <Banner/>
      <Contact/>

    </div>
  )
}

export default App
