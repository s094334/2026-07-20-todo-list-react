import { Routes, Route } from "react-router";
import Login from './components/Login'
import Register from './components/Register'
import Todolist from './components/Todo'

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todolist" element={<Todolist />} />
    </Routes>
    </>
  )
}

export default App
