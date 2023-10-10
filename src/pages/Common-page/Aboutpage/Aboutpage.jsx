import React from 'react'
import './Aboutpage.css'

import sliderimages from '../../../imgaes/sliderimg';
import Slidercard from '../../../compontent/slider-card/Slider-card';

function Aboutpage() {
  return (
    <div>
      <div className='slidiv'>

      <Slidercard sliderimages={sliderimages} />
     
      </div>
    </div>
  )
}

export default Aboutpage