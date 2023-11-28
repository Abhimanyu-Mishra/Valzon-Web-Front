import React from 'react'
import "../Style/Reuse.css"
const Reuse = (props) => {
  console.log(props.price);
  return (
    <div className='re-main'> 
      
      <div className='img-ke-phle'><img src={props.image}  width="100%" /> </div>
      <h2>{props.category}</h2>
      <span className='btn' >Price: RS{props.price}/-</span>
      <button className='btn' >{}</button>
    </div>
  )
}

export default Reuse
