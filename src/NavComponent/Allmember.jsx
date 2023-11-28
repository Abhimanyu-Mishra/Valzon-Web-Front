import React from 'react'

const Allmember = () => {
  return (
    <div className='main-parent'>
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
    </div>
  )
}

export default Allmember