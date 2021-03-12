import React from'react';

import SigninLinks from './SigninLinks';
import SignoutLinks from './SignoutLinks';
import { connect } from 'react-redux'
import './Navbar.css'
const Navbar = (props) => {
  const { auth } = props;
    const links = auth.uid ? <SigninLinks /> : <SignoutLinks />;
     return(       
      <div>
               { links }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(Navbar)