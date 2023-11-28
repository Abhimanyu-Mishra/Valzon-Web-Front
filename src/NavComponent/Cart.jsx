import React, { useContext, useState } from 'react'
import "../Style/Cart.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomScroll from 'react-custom-scroll';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { context } from '../Component/ApiiData';

const Cart = () => {
  const {cartData,newRemoveData}= useContext(context)
  console.log(cartData  ,"datacart ");
  const [itemQuantity, setItemQuantity] = useState(1)
  const navigate = useNavigate()
   const clickedOrder=()=>{
     navigate("/checkOut")
   } 
const increaseQuantity=()=>{
  setItemQuantity(itemQuantity+1)
}
const decreaseQuantity=()=>{
  if (itemQuantity>1){ 
  setItemQuantity(itemQuantity-1)
  }
  else{
    setItemQuantity(1)
  }
}
// const newremoveData=(proId)=>{
//   // const removeData = displayData.filter((i)=>i.proid !== proId)
//   // setDisplayData(removeData)
//   // const indexOfItem = cartData.indexOf(proId)
//   // const updateData = [...cartData]
//   // updateData.splice(indexOfItem , 1)
//   // setCartData(updateData)
//   console.log( cartData ,"Remove item here");
// }


  return (
    <>
      <div className='back-to-shop'>
        <Link to="/" ><ArrowBackIcon />
        <span>Continue Shopping</span>
        </Link>
      </div>
      <hr />


      <div className='cart-main'>

         <CustomScroll>
        <p className='heading-shop-p'> You Have {cartData.length} items in the cart</p>

          <div className='item-main'>
          {
            cartData.map((i)=>{
              return (
                <div className='cart-data-main'>

            <div className='item-img'>
              <img src={i.proimg} />
            </div>
               
             <div>{i.productname}</div>
            <div className='Product'>
              <AddIcon onClick={increaseQuantity} />
              <RemoveIcon onClick={decreaseQuantity} />
            </div>
            <div className='quantity'>Quantity  
               <div  className='center-text'>{itemQuantity} </div>
            </div>
            <div className='price'>MRP
               <div className='center-text'>{(i.mrp)*itemQuantity}</div>
              
            </div>

            <div className='bv-dp-main'>
            <span>BV:{(i.bv)*itemQuantity} /-</span>
            <span>DP:{(i.dp)*itemQuantity} /-</span>

           </div>
            <div className='remove' onClick={()=>newRemoveData(i.proid)}>
              <DeleteForeverIcon/>
            </div>
            </div>
            )
          })
        }
          </div>
        </CustomScroll>
     
        <div className="delivery-pay">

        <div className="payment-side-section">
          <div className="delivery-icon">
            <img
              src="https://1.bp.blogspot.com/-nO3qPOtQJ-A/Xwo_LZEYCBI/AAAAAAAABAU/KDoOKCEW7UYWLsdqqKYwk6D8of93VapgACLcBGAsYHQ/s2048/location%2Bicon.png"
              alt="" srcset="" />
            <span>Deleverd to</span>
          </div>
          <div className="delivery-adress">
            <input type="number" placeholder="Enter Delivery Pin Code" />
            <button type="submit">Check</button>
          </div>
          <br />
  
          <div className="payment-section">
            <div>Payment Method</div>
            <div className="upi-pay">
              <img
                src="https://w7.pngwing.com/pngs/421/982/png-transparent-payment-gateway-service-money-debit-card-italy-visa-text-service-logo-thumbnail.png" />
            </div>
            <br />
            <select className="select-payment-box">
              <option>Select Payment Method</option>
              <option>Cash on Delivery </option>
              <option>NetBanking/UPI</option>
              <option>CREADIT/DEBIT CARD</option>
            </select>
            <br /><br />
          </div>
        </div>
        <br /><br />
        <div className='pay'>
          <span>Total Payment</span> =
          <span>2000/-</span> <br /> <br />
  
          <span className='place-order' onClick={clickedOrder}>Go To ORDER</span>
        </div>
      </div>
      </div>
    </>
  )
}

export default Cart
