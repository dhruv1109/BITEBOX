import React, { Component } from 'react'
import logo from './images/BiteBoxLogo.jpeg'
import ShopList from '../Shop/ShopList'
import Slideshow from './Slideshow'
import Reasons from './Reasons'
import Notifications from './Notifications'
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
                    <Slideshow />                       
               </div>
               <div>
                 <Reasons />
               </div>
               <div className="Note">
                 <h2>A Note from the Developer</h2>
                 
                <p>Heya user, hope you worked smoothly throught the website. Please feel free to give feedback about the website 
                  at lakshyakatyal28@gmail.com . We are here to develop the website as we grow and your feedback will help us a lot.
                 <div> Peace</div> 
                  <div>Developer</div>
                </p>

               </div>
               <div className="footerr">
               <div className="foothead">
                 <h1>BITEBOX</h1>
                 <h5>A small initiative by a small group of friends</h5>
                </div>
                <div className="footbody">
                  <div className="contacts">
                    <h3>Contact US</h3> 
                    <p><i className="fab fa-instagram fa-2x"></i> <i className="fab fa-facebook fa-2x"></i> <i className="fab fa-linkedin fa-2x"></i> </p>
                    <h5>Number: +91
                    </h5>
                    <h5>Email: bitebox@gmail.com</h5>
                  </div>
                  <div className="org">
                    <h3>A GOGA CORPORATION PRODUCT</h3>
                  </div>
                </div>
              </div>
            </div>
            
            ) }
        else{
        return(
            <div className="dem" >
              <div className="namo ">
                  <p className="naam">Welcome {auth.displayName}, Let's get you started with some of the best food on campus!!!</p>
              </div>
               <div className="row">
                 <div className="col-9">
                   <ShopList  shops={shops}/> 
                   </div> 
                  <div className="col-3 notifications">
                      <Notifications /> 
                  <div>  
               </div>     
             </div>
             <div className="footerr">
               <div className="foothead">
                 <h1>BITEBOX</h1>
                 <h5>A small initiative by a small group of friends</h5>
                </div>
                <div className="footbody">
                  <div className="contacts">
                    <h3>Contact US</h3> 
                    <p><i className="fab fa-instagram fa-2x"></i> <i className="fab fa-facebook fa-2x"></i> <i className="fab fa-linkedin fa-2x"></i> </p>
                    <h5>Number: +91
                    </h5>
                    <h5>Email: bitebox@gmail.com</h5>
                  </div>
                  <div className="org">
                    <h3>A GOGA CORPORATION PRODUCT</h3>
                  </div>
                </div>
              </div>
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