import React, { Component } from 'react'
import logo from './images/BiteBoxLogo.jpeg'
import img1 from './images/thapatm.jpg'
import oat from './images/oat.jpg'
import ShopList from '../Shop/ShopList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './Dashboard.css'
class Dashboard extends Component {
    render() {
      
        const { shops, auth } = this.props;
        if (!auth.uid) {return (
            <div >
               <div className=" headerr">
                 <img src={logo} alt={logo} width="350" height="350"  />
               </div> 
               <h4 className="ho"> YOUR ONE STOP LOCATION FOR FOOD ORDERING....</h4>  
               <div className=" Images "> 
  <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="item active">
        <img src={logo} alt="Los Angeles" width="500" />
      </div>
      <div className="item">
        <img src={img1} alt="Chicago" width="100%" />
      </div>   
      <div className="item">
        <img src={oat} alt="New york" width="100" />
      </div>
    </div>

    
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
                  
               
               </div>
               <h2 className="lelo"> FEW REASONS WHY YOU SHOULD USE OUR SERVICES</h2> 
               <div className="info row">
                   <div className="card cards two col-12 col-md-6" style={{width: 100}}>
                         <img className="card-img-top  mx-auto img-thumbnail" src="https://image.freepik.com/free-vector/delivery-man-riding-red-scooter-illustration_9845-14.jpg" alt={logo} style={{maxWidth: 350, height: 300}} />    
                          <p className="card-text">Tired of a whole day's work? Mess food not good? 
                              not toworry we got u covered with the lighting fast food delivery service of BiteBox
                          </p>
                   </div>
                   <div className="card one cards col-12 col-md-6" width="250" height="250">
                         <img className="card-img-top  mx-auto img-thumbnail" src="https://image.freepik.com/free-vector/pastry-chefs-decorating-big-wedding-birthday-cake_74855-7772.jpg" alt={logo} style={{maxWidth: 350, height: 300}} />     
                          <p className="card-text">Planning for a Party or having a good time with homies..don't worry about food, We are here for you!! </p>
                   </div>
                   <div className="card two cards col-12 col-md-6">
                         <img className="card-img-top  mx-auto img-thumbnail" src="https://image.freepik.com/free-vector/boy-studying-with-book_113065-238.jpg" alt={logo} style={{maxWidth: 350, height: 300}} />     
                          <p className="card-text">Studying late night, want to eat something but dont want to go out no problem we are here to delivery the tastiest food on campus to you.</p> 
                   </div>
                   <div className="card one cards col-12 col-md-6">
                         <img className="card-img-top  mx-auto img-thumbnail" src="https://image.freepik.com/free-vector/illustrated-types-face-masks_23-2148604345.jpg" alt={logo} style={{maxWidth: 350, height: 300}} />     
                          <p className="card-text">We all the current scenario of the post covid world and we all know it is preferable to stay away from crowded places. So to avoid large rush on eateries across campus we are here to deliver food to your hostel-step .</p>
                   </div>
               </div>
               <div className="footerr">
                 <h1>BITEBOX</h1>

               </div>
            
            </div>
        ) }
        else{
        return(
            <div className="dem" >
              <div className="namo ">
                  <p className="naam">Welcome {auth.displayName}, Let's get you started with some of the best food on campus!!!</p>
              </div>
               <div>
                   <ShopList  shops={shops}/>  
             </div>
             <div className="footerr">
                 <h1>BITEBOX</h1>

               </div>
            </div>
        )}
    }
}
const mapStateToProps = (state) => {
    console.log(state);
return{ 
 shops: state.firestore.ordered.Outlet,
 auth: state.firebase.auth
} 
}
export default  compose(
    connect(mapStateToProps),
    firestoreConnect([
       { collection: 'Outlet',  
       }
    ]))
    (Dashboard);