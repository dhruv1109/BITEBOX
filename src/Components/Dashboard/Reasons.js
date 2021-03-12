import React from 'react'
import logo from './images/BiteBoxLogo.jpeg'



const Reasons = () => {
    return (
        <div className="in">
           <h2 className="lelo"> FEW REASONS WHY YOU SHOULD USE OUR SERVICES</h2>
           <div className="info"> 
             <div className="row">
                 <div className="col-12 col-lg-6" >
                 <div className="card jk" style={{width: 400, height: 400 }}>
                 <img  src="https://image.freepik.com/free-vector/delivery-man-riding-red-scooter-illustration_9845-14.jpg" alt={logo} className="card-img-top  mx-auto img-thumbnail" style={{maxWidth: 250, height: 200}}/>
                      <div className="card-body">
                      <h5 className="card-title">Free Delivery </h5>
                      <div className="card-text">Tired of a whole days work don't worry we got you covered, Bitebox gives free delivery above a minimum order.</div>
                    </div>
                  </div>
                  </div>
                  <div className="col-12 col-lg-6" >
                 <div className="card jk" style={{width: 400, height: 400 }}>
                 <img  src="https://image.freepik.com/free-vector/pastry-chefs-decorating-big-wedding-birthday-cake_74855-7772.jpg" alt={logo} className="card-img-top  mx-auto img-thumbnail" style={{maxWidth: 250, height: 200}}/>
                      <div className="card-body">
                      <h5 className="card-title">Birthday Parties</h5>
                      <div className="card-text">Order food in bulk and get amazing offers from Bitebox HAPPY BIRTHDAY!!.</div>
    
                    </div>
                  </div> 
                 </div>
            </div> 
            <div className="row" >
               <div className="col-12 col-lg-6" >    
                  <div className="card jk" style={{width: 400, height:400 }}>
                    <img  src="https://image.freepik.com/free-vector/boy-studying-with-book_113065-238.jpg" alt={logo} className="card-img-top  mx-auto img-thumbnail" style={{maxWidth: 250, height: 200}}/>
                      <div className="card-body">
                      <h5 className="card-title">Late Night Hunger </h5>
                      <div className="card-text">We all have been there studying late night for exams, and you start to feel hungry not to worry Bitebox will serve you from all the available Restraunts.</div>
                    </div>
                  </div>
                  </div>
                  <div className="col-12 col-lg-6" >
                 <div className="card jk" style={{width: 400, height:400 }}>
                 <img  src="https://image.freepik.com/free-vector/illustrated-types-face-masks_23-2148604345.jpg" alt={logo} className="card-img-top  mx-auto img-thumbnail" style={{maxWidth: 250, height: 200}}/>
                      <div className="card-body">
                      <h5 className="card-title">Post Covid Era</h5>
                      <div className="card-text">Today's scenario is not that safe for large gatherings and to avoid that in public ,you can use our App for online ordering .</div>
    
                    </div>
                  </div> 
                 </div>

            </div>
            </div>
          </div>                    
        
    )
}
export default Reasons