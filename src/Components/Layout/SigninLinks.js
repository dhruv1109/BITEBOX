import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import './Navbar.css'
 
  const SigninLinks = (props) => {
    return (

      <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
       </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav right">
        <NavLink to='/Porders'><li className="nav-item">YOUR ORDERS</li></NavLink>
          <li className="nav-item" ><span onClick={props.signOut}>LOGOUT</span></li>
        <NavLink to='/account'><li className="nav-item">ACCOUNT</li></NavLink>
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