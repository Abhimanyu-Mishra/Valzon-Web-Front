import React, { useEffect, useState } from 'react'

import N1 from "../Component/assets/n1.png"
import N2 from "../Component/assets/n2.png"
import N3 from "../Component/assets/n3.png"
import N4 from "../Component/assets/n4.png"
import N5 from "../Component/assets/n5.png"

import "../Style/Home.css"

import "../Style/Slide.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import h1 from "../Component/assets/h1.jpg"
import h2  from "../Component/assets/h2.jpg";
import h3 from "../Component/assets/h3.jpg";
import h4 from "../Component/assets/h4.jpg";
import h5 from "../Component/assets/g1.jpg";
const SliderComponent = () => {
   
  const [currentSlide, setCurrentSlide] = useState(0);
    const Slides = [
      { bimg:h1,
        img:N1,
        text:"Saunf Seeds",
        
        para:" Saunf Seeds is neutralise the acidity of the stomach which can sometimes increase due to improper dietary habits."
      },
      {  bimg:h2,
        img:N2,
        text:"Detergent Powder",
       
        para :'Effective Cleaning ,Stain Removal, Deodorizing , Preservation of Fabrics , Efficient Dishwashing.'
      },
      { bimg:h3,
        img:N3,
        text: "Ashwagandha Powder",
       
        para : "Ashwagandha is an herb used in Ayurvedic medicine to reduce stress, anxiety, arthritis, heart health, and cancer."
      },
      {bimg:h4,
        img:N4,
        text:"Arjun Chhal",
        
        para: "Its beneficial effect on heart function and cardiovascular health. boosts immunity, improves digestion, and promotes weight loss."
      },
      {bimg:h5,
        img:N5,
        text:"Chia Seed",
        
        para: "Chia seeds contain antioxidants, minerals.These nutrients play a role in supporting multiple body functions and systems."
      }
    ]
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    width: "100%",
    slidesToShow: 1,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  var index= 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % Slides.length);
    }, 3000); // Change image every 3 seconds (3000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [Slides]);

  const moveBackward =()=>{
    setCurrentSlide((prevIndex) => {
     return (prevIndex==0)?  Slides.length-1 : (prevIndex - 1) % Slides.length
    })
   console.log(currentSlide);
  }
  const moveForward =()=>{
    setCurrentSlide((prevIndex) => (prevIndex + 1) % Slides.length);
  }
 
  return (
    <div style={settings}>
    
          <div className='dyn-div' style={{backgroundImage: `url(${Slides[currentSlide].bimg})`, backgroundSize:("cover") }}>
          <span onClick={moveBackward}><ArrowBackIosIcon/> </span>
          
           <div className='text-main'>
            <div className='text-sli'>{Slides[currentSlide].text}</div>
            <div className='sub-text'>{Slides[currentSlide].para}</div>

            </div>
            
           <div className='im-div'> <img src= {Slides[currentSlide].img} /> </div>
           <span onClick={moveForward}> <ArrowForwardIosIcon/></span>
          </div>
      
    
       
        
    </div>
  );
};

export default SliderComponent;

