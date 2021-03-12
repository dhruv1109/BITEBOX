import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../Store/Actions/authActions'
import './Navbar.css'
 
  const SigninLinks = (props) => {
    return (
       <div>
              <nav className=" my-navbar navbar navbar-light ">   
               <Link to='/' className="navbar-brand hio">BITEBOX</Link>
         
              <div className="n1">
                <NavLink to='/Porders'><div className="nav-item w3-bar-item w3-button ">ORDERS</div></NavLink>
              </div> 
              <div className="n2">
                <span onClick={props.signOut}> <div className="nav-item  " ><i className="fas fa-sign-out-alt fa-lg"> SignOut</i></div></span>
                </div>  
                <NavLink to='/cart'> <div className="nav-item "> <i className="fas fa-shopping-cart fa-lg"> CART</i></div></NavLink>
              
              </nav>
        </div>
    )
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SigninLinks)