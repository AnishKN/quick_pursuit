import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Register />} />
            <Route path='Register' element={<Register />} />
            <Route path='Login' element={<Login />} />
            <Route path='*' element="404" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
