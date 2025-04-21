import React, { useState } from 'react'
import {SliderData} from './sliderData'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'


const Slider = () => {
  const [current, setCurrent] = useState(3)
  const slideLength = SliderData.length

  function prevImage(){
    setCurrent(current<=0?slideLength - 1:current -1)
  }
  function nextImage(){
    
    setCurrent(current<slideLength-1?current + 1:0)
  }

  return (
    <section className="flex justify-center items-center relative" >

      <FaArrowAltCircleLeft className={`absolute left-10 text-[50px] text-[#1F458E] cursor-pointer `} onClick={prevImage}/>

            {

            <div className="w-[1000px] h-[600px] flex scale-80  
            transition delay-150 duration-500 ease-in-out hover:-translate-y-1" >
                <img src={SliderData[current].url} alt={SliderData[current].alt}/>
            </div>
  
            }

      <FaArrowAltCircleRight className='absolute right-10 text-[50px] text-[#1F458E] cursor-pointer' onClick={nextImage}/>
           
    </section>
  )
}

export default Slider
