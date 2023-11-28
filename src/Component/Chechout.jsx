import React from 'react'
import "../Style/Checkout.css"
const Chechout = () => {

  //  table for display item in grid 
   
  // <div className='grid1'>Product </div>
  // <div className='grid2'>Price</div>
  // <div className='grid3'>QTY</div>
  // <div className='grid4'>Total</div>

  // <div className='grid21'>Detergent</div>
  // <div className='grid22'>56</div>
  // <div className='grid23'>1</div>
  // <div className='grid24'>56</div>

  // <div className='grid31'>Grand Total</div>
  // <div className='grid32'>56</div>

  return (
    <div className="main-page">
      <div className='left-side'>
        <div className='basic-info'>Basic Information</div><br/>
        <div className='input-div'>
        <div className='inside-input'>
          <label for="name">First Name</label>
          <input className='input-section' type='text' />
        </div>

        <div className='inside-input'>
          <label for="name">Last Name</label>
          <input className='input-section' type='text' />
        </div>
        </div> 

        <div className='input-div'>
        <div className='inside-input'>
          <label for="name">Email</label>
          <input className='input-section' type='email' />
        </div> 

        <div className='inside-input'>
          <label for="name">Mobile Number</label>
          <input className='input-section' type='text' />
        </div> 
        </div>

        <div className='address-div'>
          <label for="name">Full Address</label>
          <textarea type='text' />
        </div> 

        <div className='input-div'>
        <div className='inside-input'>
          <label for="name">City</label>
          <input className='input-section' type='text' />
        </div> 

        <div className='inside-input'>
          <label for="name">PinCode</label>
          <input className='input-section' type='text' />
        </div> 
        </div>
        <button className='order-button'>Place Order</button>
      </div>
        

      <div className='right-side'>
       
        <table className='prd-table' border={1} >
        <tr>
         <th>Product </th>
         <th>Price </th>
         <th>Quantity </th>
         <th>Total </th>
        </tr>
        <tr>
          <td>Detergent</td>
          <td>56</td>
          <td>1</td>
          <td>56</td>
 
        </tr>
        <tr>
           <th></th>
           <th>Grand Total </th>
           <th></th>
           <th>56</th>
        </tr>
       </table>
      </div>

     
    </div>
  )
}

export default Chechout
