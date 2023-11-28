import React, { useState, useEffect,useContext } from 'react';
import kcbnimg from "../Component/assets/kc-bn.jpg"
import "../Style/HouseCleaning.css"

const Kitchen = ({ }) => {

  return (
    <>
    <div className='banner-top'>
    <img src={kcbnimg} />
   </div>
   <div>HouseCleaning</div>
    </>
  );
};

export default Kitchen;
