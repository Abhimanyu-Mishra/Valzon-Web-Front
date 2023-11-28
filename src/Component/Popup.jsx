import React, { useState } from 'react'
import pop1 from "../Component/assets/pop2.jpg"
import "../Style/pop.css"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
const Popup = () => {
    const navigate = useNavigate()
    const [show ,setShow] = useState(true)

    const crossClick =()=>{
       
        setShow(false)
    }
  return (
      <center className='main-pop' style={{display :  show ? "block" : "none" }}>
      <button className='cross' onClick={crossClick}  ><CloseIcon/> </button>
        <img className='pop-img' src={pop1} />
          
      </center>
    
  )
}

export default Popup