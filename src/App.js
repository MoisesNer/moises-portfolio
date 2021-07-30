import React from 'react'
import Navbar from './components/NavBar/Navbar';
import './App.css'
import Hero from './components/Hero/Hero';
import { HeroData } from './data/HeroData'
import Dropdown from './components/Dropdown/Dropdown';
import InfoSection from './components/InfoSection/InfoSection';

function App() {

  return (
    <>
      <Navbar/>
      <Dropdown/>
      <Hero slides={HeroData}/>
      <InfoSection/>
    </>
  )
}

export default App;
