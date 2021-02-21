import React from'react';
import { Link } from 'react-router-dom';
import SigninLinks from './SigninLinks';
import logo from '../Dashboard/images/BiteBoxLogo.jpeg'
import SignoutLinks from './SignoutLinks';
import { connect } from 'react-redux'
import './Navbar.css'
const Navbar = (props) => {
  const { auth } = props;
    const links = auth.uid ? <SigninLinks /> : <SignoutLinks />;
     return(       
        <nav className=" my-navbar navbar navbar-light ">   
            
            <div>
               <Link to='/' className="navbar-brand hio" href={logo}>BITEBOX</Link>
              
               { links }
            </div>
    
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(Navbar)