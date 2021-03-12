import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'
const SignedoutLinks = () => {
 
  return (
    <div>
       <nav className=" my-navbar navbar navbar-light ">  
             <div className="helli"> 
               <Link to='/' className="navbar-brand">BITEBOX</Link>
            </div> 
             <div className="hell">
                              <NavLink to='/login'><div className="nav-item hio">Login</div></NavLink>
             </div>                 
       </nav>
    </div>
  )
  }


export default SignedoutLinks;