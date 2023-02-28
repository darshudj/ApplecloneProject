import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import Navbar from './components/Navbar/Navbar'
import Accessories from './pages/Accessories'
import Airpods from './pages/Airpods'
import Cart from './pages/Cart'
import Ipad from './pages/ipad'
import Iphone from './pages/iphone'
import Login from './pages/Login'
import Mac from './pages/Mac'
import Register from './pages/Register'
import Store from './pages/Store'
import Support from './pages/Support'
import Tv from './pages/Tv'
import Watch from './pages/Watch'


function App() {

  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/accessories' element={<Accessories/>}/>
    <Route path='/airpods' element={<Airpods/>}/>
    <Route path='/ipad' element={<Ipad/>}/>
    <Route path='/iphone' element={<Iphone/>}/>
    <Route path='/mac' element={<Mac/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='/tv' element={<Tv/>}/>
    <Route path='/watch' element={<Watch/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  </Router>
    </div>
  )
}

export default App
