import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, loginWithGoogle } from '../../store/actions/authActions'
import { Redirect, NavLink } from 'react-router-dom'
import './Login.css'
class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.signIn(this.state)
    }
    render() {
      const { auth, authError } = this.props;
      if (auth.uid) return <Redirect to='/account' />   
        return(
          <div className="dad" >
            <div className="container containers">
                 <div className="Or">
                  <button className="btn btno" onClick={() => (this.props.loginWithGoogle())}>Login with GOOGLE </button>
                  <h2 className="oro"> OR </h2> 
            </div>
              <form  onSubmit={this.handleSubmit}>
           <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" required onChange={this.handleChange}  className="form-control" id="email"  aria-describedby="emailHelp" />
           </div>
           <div className="form-group">
             <label htmlFor="Password">Password</label>
             <input type="password" required={true} onChange={this.handleChange} className="form-control" id="password"  />
           </div>
            <div className="signup">
            <button type="submit" className="btn btn-primary">Submit</button>
             <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
              <h6>New User? <NavLink to='/Signup'>Signup here</NavLink></h6>
            </div>
            </form>
         
            </div>
            </div>
        )
    }
}

  
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    loginWithGoogle: () => dispatch(loginWithGoogle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)