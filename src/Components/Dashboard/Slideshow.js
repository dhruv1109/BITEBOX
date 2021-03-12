import React from 'react';
import logo from './images/BiteBoxLogo.jpeg'
import EFFECTS from './images/EFFECTS.jpg'
import oat from './images/oat.jpg'
import thapatm from './images/thapatm.jpg'
import './Slideshow.css'
 

 
const Slideshow = () => {
    return (
      <div className="row">
        <div className="col-4">
          <img className="img-thumbnail mx-auto" src={EFFECTS}  alt={logo} style={{maxWidth: 500, height: 500}}/>  
        </div>
        <div className="col-4">
          <img className="img-thumbnail mx-auto" src={thapatm}  alt={logo} style={{maxWidth: 500, height: 500}}/>    
        </div>
        <div className="col-4">
          <img className="img-thumbnail mx-auto" src={oat}  alt={logo} style={{maxWidth: 500, height: 500}}/>  
        </div>
       
      </div>
    )
}
export default Slideshow