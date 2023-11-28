import React, { useContext, useEffect, useState } from 'react'
import "../Style/Reuse.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MyContext from '../Context/ParentContext';
import { useNavigate } from 'react-router-dom';

const Reuse = (props) => {
 const navigate = useNavigate()
//  const  myContext =  useContext(MyContext)
  // const [cartData,SetCartData] = useState()
  const cartBtnClick=()=>{
        navigate(`/p-list/${props.id}`)
    console.log(props.id );
    

}

  
  return (
    <div className='re-main'>
    
      <div className='img-ke-phle'><img src={props.image}  width="100%" /> </div>
      <h2 className='h2-des'>{props.category}</h2>
      <div className='btn-parent'>

      <div className='price-btn-parent'>
      <button className='btn-reuse' >MRP: {props.price}/-</button>
      <div className='btn-bv'>BV:{props.bv}/-</div>

      </div>

      <div>
      <button className='btn-reuse' onClick={cartBtnClick} ><AddShoppingCartIcon/><span>Add</span> </button>
      <div className='btn-bv'>DP:{props.dp}/-</div>
      </div>
      </div>
    </div>
  )
}

export default Reuse
