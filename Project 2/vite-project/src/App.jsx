import { useState } from 'react'
import Navigation from './components/Navigation/Navigation';

import './App.css'
import Contactform from './components/ContactForm/Contactform';

function App() {

  return (
    <div>
      <Navigation/>
      <Contactform/>
    </div>
  )
}

export default App
