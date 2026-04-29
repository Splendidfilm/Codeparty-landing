import { useState } from 'react'
import Navbar from './components/Nabvar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Storyline from './components/Storyline'
import ForParents from './components/ForParents'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='' >
      <Navbar />
      <Hero />
      <Journey />
      <Storyline />
      <ForParents />
    </div>
  )
}

export default App
