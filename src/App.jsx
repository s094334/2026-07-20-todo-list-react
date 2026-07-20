import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Register from './components/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Register />
    </>
  )
}

export default App
