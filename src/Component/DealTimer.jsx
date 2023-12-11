import React, { useState, useEffect } from 'react';
import "../Style/DealTimer.css"
import dealimg from "../Component/assets/f2.png"
import abhi from "../Component/assets/abhi.JPG"
const DealTimer = () => {
  // Set the deal duration (6 hours)
  const dealDuration = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

  // Calculate the deal end time by adding the deal duration to the current time
  const dealTime = new Date(new Date().getTime() + dealDuration);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = dealTime - now;

    if (difference <= 0) {
      // Deal time has passed
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className='deal-main'>

    <div className='deal-img'>
         <img src= {dealimg} />
      </div>

      
     <div>
      <p className='color-blue-offer'>Before you go... </p>
      <p>We'll save your offer for </p>
      <h2 className='deal-heading'>20% off</h2>
      <p>Offer will Expire in </p>

      <div className='time-Zone'>
        <span>{timeRemaining.hours}h </span>
        <span>{timeRemaining.minutes}m </span>
        <span>{timeRemaining.seconds}s</span>
      </div>
      </div>

      
    </div>
  );
};

export default DealTimer;
