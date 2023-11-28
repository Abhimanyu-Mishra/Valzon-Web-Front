import React from 'react'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import Box from '@mui/material/Box';
// import InfoOutlined from '@mui/joy/Input';
// import TextField from '@mui/material/TextField';
import "../Style/Reach.css"
const Reachform = () => {
  return (
    <div className='react-main'>
     <center>Reach US</center>
     <div className='reach-sub-main'>
        <div className='reach-sub1'>
        <h4>Call Us</h4><br/>
        <li className='li-using-contact' style={{ display: "flex", alignItems: "center", width:"110%"}}><PermPhoneMsgIcon />: 9111777280 </li><br/>
        <li style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"110%" }}><AccessAlarmIcon />:  Hours:10:00 - 07:00, Mon - Fri</li><br/>
        <li style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"110%" }}><AttachEmailIcon />:  valzonindia@gmail.com</li>
        </div>
        <div className='reach-sub2'>
           
           <input type='text' placeholder='Name' variant="outlined" color="primary"/><br/>
           <input type="email" placeholder='Email' /><br/>
           <input type="number" placeholder='Mobile Number' /><br/>
           <textarea className='messaeg-text' type='textarea' placeholder='Message' /><br/>
           <button type='submit'  >Send Message</button>

{/*
           <TextField id="outlined-basic" label="Outlined" variant="outlined" />
           <TextField id="filled-basic" label="Filled" variant="filled" />
           <TextField id="standard-basic" label="Standard" variant="standard" />
  */}
        </div>
     </div>
    </div>
  )
}

export default Reachform

