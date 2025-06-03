import { useState } from 'react'
import Hero from './components/Hero'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero /> {/* This is how you "call" or render it */}
    </div>
  );
}

export default App
