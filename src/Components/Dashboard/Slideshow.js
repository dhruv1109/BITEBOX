import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import EFFECTS from './images/EFFECTS.jpg'
import oat from './images/oat.jpg'
import thapatm from './images/thapatm.jpg'
 

 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide" >
            <div style={{'backgroundImage': `url(${thapatm})` }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${oat})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${EFFECTS})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow