import React from 'react'
import Navbar from './Navbar'
import Routee from './Routee'
import ApiiData from './Component/ApiiData';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

import Footer from './Footer/Footer';
import Popup from './Component/Popup';
const App = () => {
  return (
    <div>
   
      <Navbar/>
      <Routee/>
      <Popup/>
      <Footer/>

    </div>
  )
}

export default App
