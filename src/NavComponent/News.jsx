// import React from 'react'
// import abStr1 from "../Component/assets/abStr.jpg" 
// import ab1 from "../Component/assets/ab1.webp"
// import "../Style/News.css"
// const News = () => {
//   return (
//     <div className='news-main'>
//       <div className='news-fi-div'>
//        <img src={ab1} />
//        <center>
//         <h2 className='welcome-text'>Welcome to the world of Valzon!</h2>
//         <p className='welcome-text'>Helping People live better, healthier lives</p>
//        </center>
//       </div> 
//       <center className='white-back-valzon'>
//         <h2>This is Valzon</h2>
//         </center>
//         <p className='aftergreen-p'>
//         Millions of Passion-prenueres and more than employees worldwide contribute to our mission of helping people live better, healthier lives. Join us in the journey and let your passion connect you to the world’s vibrant communities on health, wellness, fitness, and beauty. Our platform helps you unleash your entrepreneurial journey through social commerce and consumers to find what they love to support their health and wellness. Discover Amway’s history, mission, and brand’s journey of empowering entrepreneurs with exciting business opportunities for over years.
//         </p>
      
//       <h3 className='aftergreen-p' >Our Strength</h3>
//       <p className='aftergreen-p'>Valzon has been working towards enhancing the spirit of entrepreneurship in the country. Entrepreneurship is at the heart of everything we do. We have a global network of over one million Amway Direct Selling (ADS) Partners that includes from India, of which 60% are women. We are consistently striving to create a robust ecosystem that provides an avenue for our partners to own and operate their own businesses around their passions for fitness, healthy living, cooking, and beauty.</p>
//       <div className='news-sec-div'>
//        <div> <img src={abStr1} /></div>
//        <h2>Our Strength</h2>
//       </div>

//     </div>
//   )
// }

// export default News

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/News.css"

import N1 from "../Component/assets/n1.png"
import N2 from "../Component/assets/n2.png"
import N3 from "../Component/assets/n3.png"
import N4 from "../Component/assets/n4.png"
import N5 from "../Component/assets/n5.png"
import h1 from "../Component/assets/h1.jpg"
import h2  from "../Component/assets/h2.jpg";
import h3 from "../Component/assets/h3.jpg";
import h4 from "../Component/assets/h4.jpg";
import h5 from "../Component/assets/g1.jpg";


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const Slides = [
    h1,h2,h3
    // { bimg:h1,
    //   img:N1,
    //   text:"Saunf Seeds",
      
    //   para:" Saunf Seeds is neutralise the acidity of the stomach which can sometimes increase due to improper dietary habits."
    // },
    // {  bimg:h2,
    //   img:N2,
    //   text:"Detergent Powder",
     
    //   para :'Effective Cleaning ,Stain Removal, Deodorizing , Preservation of Fabrics , Efficient Dishwashing.'
    // },
    // { bimg:h3,
    //   img:N3,
    //   text: "Ashwagandha Powder",
     
    //   para : "Ashwagandha is an herb used in Ayurvedic medicine to reduce stress, anxiety, arthritis, heart health, and cancer."
    // },
    // {bimg:h4,
    //   img:N4,
    //   text:"Arjun Chhal",
      
    //   para: "its beneficial effect on heart function and cardiovascular health. boosts immunity, improves digestion, and promotes weight loss."
    // },
    // {bimg:h5,
    //   img:N5,
    //   text:"Chia Seed",
      
    //   para: "Chia seeds contain antioxidants, minerals.These nutrients play a role in supporting multiple body functions and systems."
    // }
  ]
  return (
    <div className="auto-image-slider">
    <Slider {...settings}>
      {Slides.map((image, index) => (
        <div className='img-div' key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default ImageSlider;






  
 