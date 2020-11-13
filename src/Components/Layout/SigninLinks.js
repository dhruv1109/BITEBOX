import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import './Navbar.css'
 
  const SigninLinks = (props) => {
    return (

      <div>
        <div className="navbar-nav ">
        <NavLink to='/Porders'><div className="nav-item">YOUR ORDERS</div></NavLink>
          <div className="nav-item" ><span onClick={props.signOut}><i class="fas fa-sign-out-alt fa-lg"></i></span></div>
        <NavLink to='/cart'><div className="nav-item"><i class="fas fa-shopping-cart fa-lg"></i></div></NavLink>
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