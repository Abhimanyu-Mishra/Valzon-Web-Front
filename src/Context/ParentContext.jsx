// import React, { createContext, useState } from 'react'
//    const MyContext = createContext()
//   function ParentContext  (props) {
//    const [cart, setCart] =useState([])
//    const updateCart = (cartItem)=>{
//       cart.push(cartItem)
//    }
   
//    const removeCartItem =(cartItem)=>{
//      cart.pop(cartItem)
//      const updatedCart = cart.filter(item=>{
//         return item.id !== cartItem.id
//      })
//      setCart(updatedCart)
//    }
//   return (
//     <div>
//       <MyContext.Provider value ={{cart,setCart,updateCart,removeCartItem}} >
//       {props.children}
//       </MyContext.Provider>
//     </div>
//   )
// }

//  export default ParentContext;
