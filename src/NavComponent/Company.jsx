import React from 'react'
import imgg from "../Component/assets/abStr.jpg"
import cs1 from "../Component/assets/c1.jpg"
import cs2 from "../Component/assets/c2.jpg"
import cs3 from "../Component/assets/c3.jpg"
import cs4 from "../Component/assets/c4.jpg"
import cs5 from "../Component/assets/c5.jpg"
import cir1 from "../Component/assets/cr12.jpeg"
import cir2 from "../Component/assets/cir2.png"
import log from "../Component/assets/cir11.webp"
import d1 from "../Component/assets/d11.jpeg"
import d2 from "../Component/assets/d22.jpeg"
import d3 from "../Component/assets/d44.jpeg"
import d4 from "../Component/assets/d5.jpeg"


import "../Style/Company.css"

const Company = () => {
 const  cir = [
    {
      im : log,
      sub : "Product Catalogue",
      sub2 : "Click to download",
      sub3 : "Read more"
    },
  {
    im : cir1,
    sub : "Career Opportunity",
    sub2 : "Business Plan",
    sub3 : "Read more"
  }
  ,
  {
    im : cir2,
    sub : "Ankur",
    sub2 : "Smarter Ticketing Solution",
    sub3 : "Read more"
  }
 ]
  return (
    
    <div className='company-main'>
    
      <div className='fi-conte-aboutt'>
      <div className='fi-img'> 
      <img src={imgg} />
      </div>
       <div className='fi-cont-sub2'>
        <div className='head-tag'>Welcome To Valzon</div>
        <div>We wish to build a sustainable model & strong foundation for future generations, through conserving our brand, fulfilling our promises & upskilling our people.
        </div>
        <br/>
        <div>We collaborate with leading Indian manufacturers who provide us with customised products for our exclusive brands & trademarks. Safe Shop offers a variety of Learning/knowledge, Healthcare, Personal care, Lifestyle, Kitchen-essentials, Grocery, Travel, Footwear and Spiritual products. Our product range is being constantly enhanced. Kindly browse the website to learn about latest additions.</div>
        <br/>
        <div className='customer3-pic-head'>
         <div className='cs'><img src={cs1} /></div>
         <div className='cs'><img src={cs2} /></div>
         <div className='cs'><img src={cs3} /></div>
        </div>
       </div>
      </div>

      <div className='cart3-main'>

      { cir && cir.map ((i)=>{
         return(
           <div className='cart3-sub1'>
      
         <div className='cart3-img-company'>
           <img src={i.im} alt='err' width="100%" />
           </div>
           <div className='cart3-sub1-text'>
           {i.sub}
          
           <br/>
           {i.sub2}

            <br/>
           <span className='shop-now'>{i.sub3}</span>
           </div>
        

     </div>
         )
      })}

   </div>
   
      <div className='head-tag'>Why Choose Us</div>
      <div className='head-tag'>You’re in Safe Hands with Valzon.</div>

      <div className='after-safe-hand-main'>
        <div className='img-head'>
         <div className='img-sub1'> <img src={cs4} /></div>
         <div className='img-sub2'> <img src={cs5} /></div>

        </div>

        <div className='after-safe-sub2-text'>
        Innovation continues to guide all our efforts, whether they are related to new product development or distribution strategies. It is the underlying principle of all that we create and execute, towards improving customer experience.<br/><br/>
        <div>Sensitivity to customer needs and speedy response are the core tenets of our approach to customer service</div><br/>
        <div>Valzon has successfully steered along two decades of consistent growth, customer satisfaction and unsurpassed success. Based out of the capital city, Delhi, we have traversed this historical journey with much aplomb.</div><br/><br/>
        <div>A positive culture permeates the internal workings of the company. Collaborative leadership and relationships built on mutual trust and understanding, nurtured over the years, have helped the company focus on increasing efficiency and reducing wastage at every level.</div><br/><br/>
        </div>
      </div>

      <div className='mission3cart-main'>

        <div className='mission-sub'>
        <div className='mission-heading'>Work with us
        </div>
        <div>At Valzon we believe in a cheerful and positive approach which helps transform the workplace into a second home. Optimistic employees lead to better productivity and increased job satisfaction.</div>
      
        </div>

        <div className='mission-sub'>
        <div className='mission-heading'>Our history
        </div>
        <div>Valzon India Marketing Pvt. Ltd., which started its operations in the year 2019, is now one of the leading direct-selling companies in India, dealing in world-class products.</div>
        </div>
        
        <div className='mission-sub'>
        <div className='mission-heading'>Our Mission
        </div>
        <div>We wish to build a sustainable model & strong foundation for future generations, through conserving our brand, fulfilling our promises & upskilling our people.</div>
        </div>
      </div>

      <div className='mission-heading'>Meet Our core Team</div>
      <div className='director-main'>

      <div className='team-sub'>
        <div className='team-img'>
          <img src={d1} />
          <div className='namee'>Tilkesh Bhatia <br/>
          (Director)</div>
        </div>
        <div className='flow-scroll'>Bringing forth the best possible results to clients through innovative ideas defines Tilkesh Bhatia. An M. Tech. from the prestigious IIT BHU and a former investment banker with an overall experience of ten years, he has been instrumental in unlocking unique possibilities for a sustainable future and lasting change. A numbers guy, Tilkesh is responsible for the company’s finance portfolio, which also includes risk management, internal audit as well as investor relations. Tilkesh believes in achieving meaningful progress by offering world-class services and integrated solutions through robust and seamless internal processes.</div>

      </div>

      <div className='team-sub'>
      <div className='team-img'>
        <img src={d2} />
        <div className='namee'>Sourabh Khandelwal <br/>
    
        (Director)</div>
      </div>
      <div className='flow-scroll'>Sourabh has successfully fostered the marketing and creative side of the business to achieve demonstrable results. His passion for bringing a global perspective to brand building and advertising can be seen in the marketing efforts that are put by E-Savari to make that change and innovation visible. With more than nine years of experience in sales and marketing, Sourabh is a graduate in B.Tech from the well-known Technocrats Institute of Technology and is responsible for E-Savari’s accelerated growth in the markets it is present in through his creative efforts and advertising & communications acumen.</div>
      
    </div>

    <div className='team-sub'>
    <div className='team-img'>
      <img src={d3} />
      <div className='namee'>Anuj Jain <br/>
     
      (Director)</div>
    </div>
    <div className='flow-scroll'>As someone who has over the years specialized in the nuances of IoT, Anuj is the go-to man when it comes to technological innovation, product research and development, and technical know-how of e-vehicles. An M. Tech. from the coveted Maulana Azad National Institute of Technology (MANIT), Anuj has a deep understanding of analytics, is a strategic and transformational leader who looks forward to taking challenges, and is conditioned to adapt to the ever-changing EV industry, which is growing both in numbers as well as technological advancements by the day. With more than four years of EV experience, Anuj is credited with establishing the electric 3W market in Madhya Pradesh for E-Savari and looks to stretch the business model beyond state boundaries in the foreseeable future.</div>
    
  </div>

  <div className='team-sub'>
  <div className='team-img'>
    <img src={d4} />
    <div className='namee'>Mohit Kumar <br/>
    (Director)</div>
  </div>
  <div className='flow-scroll'>With more than four years of experience in the automobile vertical, Mohit, a Law graduate, has a knack for people management. Right from contributing towards sales, he looks into the legal framework of the business too and is also responsible for the day-to-day operations of E-Savari. Selling a whopping 2500 E3W vehicle is a testimony to his sales competence. Besides, the Purchase of e-vehicles also falls under his gamut, and no wonder he has been in the thick of things with the company getting into an expansion mode now. While providing continued business support, Mohit also looks into talent optimization, talent retention and ensures to manage the resources to the best of their efficiency.</div>
  
</div> 
      </div>
    </div>
  )
}

export default Company