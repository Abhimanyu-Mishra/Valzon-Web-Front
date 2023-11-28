// import React, { useState } from 'react'
// import "../Style/Galary.css"
// import img1 from "../Component/imgRoute/Vroute.jpg"
// import img2 from "../Component/imgRoute/Vroute2.jpg"
// import img3 from "../Component/imgRoute/Vroute3.jpg"
// import img4 from "../Component/imgRoute/Vroute4.jpg"
// import img5 from "../Component/imgRoute/Vroute5.jpg"
// import img6 from "../Component/imgRoute/Vroute6.jpeg"
// import img7 from "../Component/imgRoute/Vroute7.jpeg"
// import img8 from "../Component/imgRoute/Vroute8.jpeg"
// import { Outlet } from 'react-router-dom'

// const Galary = () => {

//   const [data, Sdata] = useState([
//     { imgsr: img1 },
//     { imgsr: img2 },
//     { imgsr: img3 },
//     { imgsr: img4 },
//     { imgsr: img5 },
//     { imgsr: img6 },
//     { imgsr: img7 },
//     { imgsr: img8 },
//   ])
//   return (
//     <div className='img-main'>
//       {
//         data && data.map((i, index) => {
//           return (
//             <div className='img-sub'>

//               <img key={index} className='imgcon' style={{  }} src={i.imgsr} />
              
//             </div>
//           )
//         })
//       }
//       <Outlet/>
//     </div>
//   )
// }

// export default Galary

import React, { useState } from 'react';
// import './CardContainer.css';
import RedChili from "../Component/assets/soya.png"
import ChloroJuice from "../Component/assets/CHLOROPHYL_JUICE_-removebg.png"
import DetergrntPowder from "../Component/assets/DETERGENT_POWDER_-removebg-preview.png"
import "../Style/Home.css"

const CardContainer = ({}) => {
  const cards = [
    {
      imgsrc : RedChili,
      heading : "A great contribution to your health",
     
    },
    {
      imgsrc : ChloroJuice,
      heading : "A great contribution to your health",
     
    },  {
      imgsrc : DetergrntPowder,
      heading : "A great contribution to your Daily Life",
     
    }, {
      imgsrc : DetergrntPowder,
      heading : "A great contribution to your Daily Life",
     
    },{
      imgsrc : ChloroJuice,
      heading : "A great contribution to your health",
    },
     
     {
      imgsrc : DetergrntPowder,
      heading : "A great contribution to your Daily Life",
     
    },{
      imgsrc : ChloroJuice,
      heading : "A great contribution to your health",
     
    }
  ]
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    setScrollIndex(scrollIndex - 1);
  };

  const scrollRight = () => {
    setScrollIndex(scrollIndex + 1);
  };

  return (
    <div className="cart3-after-slider-main">
      <div className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </div>
      <div className="cart3-after-slider-sub1">
        <div className="cart3-after-slider-sub1" style={{ transform: `translateX(-${scrollIndex * 20}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="cart3-after-slider-sub1">
              <div className="cart3-img-k-phle"><img src={card.imgsrc} alt={card.text} /> </div>
              <p className="cart3-text">{card.heading}</p>
              <span className='shop-now'>Shop Now</span>

            </div>
          ))}
        </div>
      </div>
      <div className="scroll-button right" onClick={scrollRight}>
        &gt;
      </div>
    </div>
  );
};

export default CardContainer;
