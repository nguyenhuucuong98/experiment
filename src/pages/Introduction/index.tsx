import { useEffect } from "react";
import { SliderImg } from "../../parent/ImgFile"
import AOS from "aos";

const International = () => {

  useEffect(()=> {
    AOS.init({
      duration: 1000
    })
  },[])

  return (
    <div  className='w-7xl  mr-auto ml-auto mt-10 relative'>
      <div data-aos='zoom-in-down' className="slider-img" >
        <div className="slide-strack">
          <div className="slide"><img src={SliderImg.slide_1} alt="slide-1" /></div>
          <div className="slide"><img src={SliderImg.slide_2} alt="slide-2" /></div>
          <div className="slide"><img src={SliderImg.slide_3} alt="slide-3" /></div>
          <div className="slide"><img src={SliderImg.slide_4} alt="slide-4" /></div>
          <div className="slide"><img src={SliderImg.slide_5} alt="slide-5" /></div>
          <div className="slide"><img src={SliderImg.slide_6} alt="slide-6" /></div>
          <div className="slide"><img src={SliderImg.slide_7} alt="slide-7" /></div>
          <div className="slide"><img src={SliderImg.slide_8} alt="slide-8" /></div>
        </div>
      </div>
    </div>
  )
}

export default International