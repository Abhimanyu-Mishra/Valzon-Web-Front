import React, { useContext, useEffect, useState } from 'react'
import "../Style/P-listing.css"
import imgsr from "../Component/assets/DETERGENT_POWDER_-removebg-preview.png"
import { useNavigate, useParams,  } from 'react-router-dom'
import axios from 'axios'
import { context } from './ApiiData'
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Plisting = () => {
  const navigate = useNavigate();
  const [faqShow,setfaqShow] = useState(!true)
  const [productItem , setProductItem] = useState()
  const plistData= useContext(context)

  const {id} = useParams();

  // useEffect(()=>{
  //   const getProductItem=()=>{
  //     console.log(id);
  //     axios.get(`https://fakestoreapi.com/products/`)
  //     .then(response => {
  //       setProductItem(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
      
  //   }
  //   getProductItem()
  // },[])
  console.log(plistData);

  const filterData = plistData.productData.find((item)=>
    item.proid == Number(id)
 )
//  setProductItem(fiterData)
 

const cartClick=()=>{
  plistData.addToCart(filterData.proid)
  navigate("/cart")
  console.log(filterData ,"FilterData With id whose render in plist");
  }
 

  const imgg =  "https://panel7.tspltest.com/ecommerce/images/products/vlz/638860a3e573b_1669882019ASHWAGANDA NEW.jpg"
  // {data.map((item, index) => (
  //   <li key={index}>{item.name}</li> // Assuming your API returns an array of objects with a "name" field
  // ))}
  // console.log(productItem[0].dp);

  const toggle =()=>{
   
    setfaqShow(!faqShow)
  }
  return (

    <div className='main-div'>        
     <>
      <div className="p-img-main"  >

      <div className='small-img-main'>
      <img src={filterData.proimg}  />
      <img src= {filterData.proimg} />
      <img src= {filterData.proimg} />
      <img src= {filterData.proimg} />
      <img src= {filterData.proimg} />
      </div>

       <div className='big-img'>
        <img src={filterData.proimg} />
       </div>
      
      </div>

      <div className='text-main-offer'>
        <div className='heading-text' >{filterData.productname}</div>
        <div> Description zsbdcjksdnjgyruejinkjgsyrbjhrsf
        y7uhjbrhdguhlsjnkd,bhfvdcbsjndfrbhdvc.</div>
        <div className='rating'> rating </div>
        <div className='rating'> MR:  {filterData.mrp}/-</div>
        <div className='rating'> DP : {filterData.dp}/-</div>
        <div className='rating'> BV: {filterData.bv} /- </div>
       
        <div className="offer">Available Offers</div>

        <div className="margin-line">
          <span><i className="fa-brands fa-buffer"></i></span>
          <span className="bank-offer">Bank Offer</span>
          <span>10% off on Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above</span>
      </div>

      <div>
          <span><i className="fa-brands fa-buffer"></i></span>
          <span className="bank-offer">Bank Offer</span>
          <span>10% off on Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above</span>
      </div>

      <div>
          <span><i className="fa-brands fa-buffer"></i></span>
          <span className="bank-offer"></span>
          <span>Buy for 100 get ₹200 off your Next Buy</span>
      </div>
      <br/>
        <br/>
        <div className='cart-button' onClick={cartClick}>Add To Cart</div>
     

        <div className='wrapper'>
          <div className='according'>
           
           <div className='item'>
             <div className='title' onClick={toggle}>
               <span className='question'>Ask Me Question.</span>
               <span>{faqShow ? <KeyboardArrowUpIcon/> :<KeyboardArrowDownIcon/>}</span>
             </div>
             <div className={ faqShow ? 'content'  : "notShowFaq" }>Answer is here </div>
           </div>
          </div>
        </div>
        


        </div>
        </>

    
    </div>
  )
}

export default Plisting
