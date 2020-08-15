import React from 'react'
import Menu from './components/menu/Menu.jsx'
import HomeScreen from './pages/home/HomeScreen'
import Footer from '../src/components/footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from '../src/pages/about/AboutUS'
import OurProejects from '../src/pages/projects/OurProejects'
import MandG from '../src/pages/M&G/MarblesAndGranitesPAge'
import Contact from '../src/pages/contact/Contact'
import './styles.css'
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Menu />
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/about' exact component={About} />
          <Route path='/maarbels-granites' exact component={MandG} />
          <Route path='/projects' exact component={OurProejects} />
          <Route path='/contact-page' exact component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
