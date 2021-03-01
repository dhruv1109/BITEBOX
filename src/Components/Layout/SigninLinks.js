import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../Store/Actions/authActions'
import './Navbar.css'
 
  const SigninLinks = (props) => {
    return (
       <div>
           <button className="navbar-toggler button1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
           </button>
        <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
          <NavLink to='/Porders'><li className="nav-item oo">ORDERS</li></NavLink>
          <span onClick={props.signOut}> <li className="nav-item oo " ><i className="fas fa-sign-out-alt fa-lg">SignOut</i></li></span>
          <NavLink to='/cart'> <li className="nav-item oo"> <i className="fas fa-shopping-cart fa-lg">CART</i></li></NavLink>
             </ul>
          </div>
  
        </div>
    )
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SigninLinks)