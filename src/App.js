import React from 'react'
import Navbar from './components/NavBar/Navbar';
import './app.css'
import Hero from './components/Hero/Hero';
import { HeroData } from './data/HeroData'
import { InfoData1 } from './data/InfoData'
import Dropdown from './components/Dropdown/Dropdown';
import InfoSection from './components/InfoSection/InfoSection';

function App() {

  return (
    <>
      <Navbar/>
      <Dropdown/>
      <Hero slides={HeroData}/>
      <InfoSection {... InfoData1}/>
    </>
  )
}

export default App;
