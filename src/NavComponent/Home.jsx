import React, { useContext, useState } from 'react'
import { context } from '../Component/ApiiData'
import Reuse from '../Component/Reuse';
import SliderComponent from '../Component/Slider';
import ReactPlayer from 'react-player';
import "../Style/Home.css"
import detail from "../NavComponent/Details"
import f1 from "../Component/assets/f2.png"
import f2 from "../Component/assets/f3.png"
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ContactlessIcon from '@mui/icons-material/Contactless';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Reachform from './Reachform';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/Kitchen.css';
import images from "../NavComponent/Details"
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [scrollIndex, setScrollIndex] = useState();

  const scrollRight = () => {
    setScrollIndex(scrollIndex + 1);
  };
  const data = useContext(context)
  console.log(data);
  // console.log("apidatain home page", data.productData);

  const divbackstyle = {
    backgroundImage: `url(${f1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const describe=[
    {
      head:"FREE DELIVERY",
      subhead:"WORLDWIDE",
      ico:<LocalShippingIcon/>
    },
    {
      head:"24/7 SUPPORT",
      subhead:"CUSTOMER SUPPORT",
      ico:<HeadsetMicIcon/>
    },
    {
      head:"PAYMENT",
      subhead:"SECURE SYSTEM",
      ico:<ContactlessIcon/>
    }, {
      head:"TRUSTED",
      subhead:"ENUINE PRODUCTS",
      ico:<EmojiEventsIcon/>
    }
  ]
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  // Function to handle moving to the next image
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };
  const settings = {
    infinite: true,
    speed: 2000, // Transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto slide change delay in milliseconds
    beforeChange: (current, next) => setCurrentIndex(next),
  };
  let currentScroll = 5;
  const rightScroll=()=>{
     if(currentScroll < detail.length){
         currentScroll++;
     }
     console.log(currentScroll);
  }

  return (
    <>
    <div className="image-slider">
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="slide">
          <img src={image.imgsrc} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
    <button className="prev-button" onClick={prevSlide}>
      
    </button>
    <button className="next-button" onClick={nextSlide}>
      
    </button>
  </div>
    <div className='four-cont-describe'>
      {describe && describe.map((dat)=>{
        return(
        <div>
        <div className='four-cont-describe-data'>{dat.ico}</div>
       <span>
       <div className='four-cont-describe-data'>{dat.head}</div>
       <p className='four-cont-describe-sub-data'>{dat.subhead}</p>
       </span>
      </div>
      )})}
    </div>
      <span className='popular-heading' style={{ paddingLeft: "1%" }} >Our Popular Products</span>
      
      <div className='popular-cart-main' style={{ transform: `translateX(-${scrollIndex * 20}%)` }}>

        {detail && detail.map((i) => {
          return (
            <div className='popular-sub1'>

              <div className='cart3-img-k-phle'>
                <img src={i.imgsrc} alt='err' width="100%" />
              </div>
              <div className='cart3-text'>{i.heading}
                <br />
                <span className='shop-now'>Shop Now</span>
              </div>


            </div>
          )
        })}

      </div>

      <div className='right-scroll-btn' onClick={rightScroll}><ArrowForwardIosIcon/></div>

   {/*   // <div className='right-scroll-btn'><ArrowForwardIosIcon/></div>
      */}
      <div className='disp-main'>

        {data.productData && data.productData.map((a) =>{
          return (
          
            <Reuse
              id ={a.proid}
              price={a.mrp}
              image={a.proimg}
              category={a.productname}
              bv={a.bv}
              dp={a.dp}
            />
         
        )
        }
        )}
      </div>
   
      <Reachform />

      <div className='media-main'>
        <div className='media-sub'> 
          <ReactPlayer width="100%" height="300px" url="https://youtu.be/k3nps23h6tc?feature=shared" controls = {true} className="media1"/>
          <div className='heading-text-video'> Valzon Plan describe</div>
        </div>

        <div className='media-sub'> 
          <ReactPlayer width="100%" height="300px" url="https://youtu.be/b2koo8nnr9g?feature=shared" controls = {true} className="media1"/>
          <div className='heading-text-video'> Lalitpur Seminar</div>

        </div>

        <div className='media-sub'> 
          <ReactPlayer width="100%" height="300px" url="https://youtu.be/dQ3QXj9uuRw?feature=shared" controls = {true} className="media1"/>
          <div className='heading-text-video'> Valzon LDP Program</div>

        </div>
    
      </div>

    </>


  )
}

export default Home
