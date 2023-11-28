import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './NavComponent/Home'
import Contact from './NavComponent/Contact'
import Brand from './NavComponent/Brand'
import Company from './NavComponent/Company'
import Galary from './NavComponent/Galary'
import News from './NavComponent/News'
import Signup from './NavComponent/Signup'
import Login from './NavComponent/Login'
import Personalcare from './ProductCategory/Personalcare'
import Kitchen from './ProductCategory/Kitchen'
import HouseCleaning from './ProductCategory/HouseCleaning'
import Pooja from './ProductCategory/Pooja'
import Welness from './ProductCategory/Welness'
import Video from './NavComponent/Video'
import Cart from './NavComponent/Cart'
import Plisting from './Component/P-listing'
import Chechout from './Component/Chechout'

const Routee = () => {
  return (
    <div>
     <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='contact' element = {<Contact/>} />
       <Route path='/brand' element = {<Brand/>} />
       <Route path="/company" element = {<Company/>} />
       <Route path="/galary" element = {<Galary/>}/> 
       <Route path='/vid' element = {<Video/>} />
       <Route path="/news" element = {<News/>} />
       <Route path="/signUp/" element = {<Signup/>} />
       <Route path='login' element = {<Login/>} />      
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/personalcare' element = {<Personalcare/>} />
       <Route path='/kitchen' element = {<Kitchen/>} />
       <Route path='/housecleaning' element = {<HouseCleaning/>} />
       <Route path='/pooja' element = {<Pooja/>} />
       <Route path='/wellness' element = {<Welness/>} />
       <Route path='/p-list/:id' element = {<Plisting/>} />
       <Route path='/checkOut' element={<Chechout/>} />
     </Routes>
    </div>
  )
}

export default Routee
