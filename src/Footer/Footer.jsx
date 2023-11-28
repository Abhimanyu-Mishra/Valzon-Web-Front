import React from 'react'
import "../Style/Footer.css"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import imgg from "../Component/assets/yellow-back1.jpg"
import { Link } from 'react-router-dom';

const Footer = () => {
    const background = {
        backgroundImage: `url(${imgg})`,
        backgroundSize: 'cover',// Optional - to scale the image to cover the entire div
        backgroundRepeat: 'no-repeat', // Optional - to prevent the image from repeating
        // You can use other background properties here, like backgroundPosition, backgroundAttachment, etc.
        width: `94%`,
        height: `300px`,
        borderRadius: `3%`,

    }
    // <div className='back-img' style={background} >
    //     <div className='sec-back-img-head-text'>People, Products and Planet <div style={{ color: "rgb(22, 249, 116)" }}>Our CSR</div></div>
    //     <div>Valzon  has chosen to prefix the selfless 'OUR'</div>
    //     <div className='email-responce-k-uper'>when partnering for social initiatives Our People, Our Products & Our Planet.</div>

    //     <div className='email'>
    //         <input type='email' id='submit-email' placeholder='Your email address' />
    //         <button type='submit' className='btnnn'  > Subscribe </button>
    //     </div>
    // </div>

    return (
        <div className='f-strong-main'>

            <div className='footer-main'>

                <div className='first-li'>
                        <ul> <h5>MY ACCOUNT</h5>
                            
                        <li>Log in </li>
                        <li>Register </li>

                            <br />
                            <h5>Call Us</h5>
                            <li style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "110%" }}><PermPhoneMsgIcon className='mui-size' />   : 9111777280 </li>
                            <li style={{ display: "flex", flexDirection: "row",  width: "110%" }}><AccessAlarmIcon className='mui-size' /> : Hours:10:00 - 07:00, Monday to Saturday</li>
                            <li style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "110%" }}><AttachEmailIcon className='mui-size' /> : valzonindia@gmail.com</li>

                            <br />
                       </ul>
               
                    <ul>
                            
                            <h5>POLICY</h5>
                            
                            <li>Compliance Documents Policy </li>
                            <li>Product Return Policy </li>
                            <li>Refund Policy</li>
                            <li>Cancellation Policy</li>
                            <li>Replacement Policy</li>
                            <li>Privacy Policy </li>
                            <li>Shipping Policy </li>
                            <li>Term & Conditions </li>
                        </ul>
                    
                    </div>

                    <br></br>



                        <div className='first-li'>
                            <div className='for-address'>


                                <h5 className="map-h2">Come Visit Us At Our Campus</h5>
                                <div className='font-for-media font-Desktop'><AddLocationAltIcon /> Valzon
                                    2nd Floor 18, Gulab<br /> Bagh near  Metro Mall, Dewas<br /> Naka, Indore, Madhya Pradesh 452010</div>
                                <br />

                                <div className='social'>

                                    <span><FacebookIcon />  </span>

                                    <span><InstagramIcon />  </span>
                                    <Link to="https://www.linkedin.com/company/valzon-india-pvt-ltd/" target='_blank' style={{ textDecoration: "none" }}><span><LinkedInIcon />  </span></Link>

                                </div>

                            </div>
                            <div className='mapping'>
                                <iframe className='mapp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.925524266447!2d75.90517729999999!3d22.768145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d4c04378541%3A0x49a84815f15340e7!2seSavari!5e0!3m2!1sen!2sin!4v1691584643872!5m2!1sen!2sin" ></iframe>
                            </div>
                        </div>

                        </div>
               
                <center style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className='copyright'><CopyrightIcon />Valzon2023</center>
                <br></br>

            

        </div>
    )
}

export default Footer