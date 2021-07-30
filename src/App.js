import React from 'react'
import { BrowserRouter as Router, Switch, Route} from  'react-router-dom'

import './App.css'

import Navbar from './components/NavBar/Navbar';
import Dropdown from './components/Dropdown/Dropdown';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Dropdown/>
      <Switch>
        <Route  path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
