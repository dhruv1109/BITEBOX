import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  signup } from '../../Store/Actions/authActions'
import { Redirect } from 'react-router-dom'
class Signup extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        number: ''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.signup(this.state)
    }
    render() {
      const { auth, authError } = this.props;
      if (auth.uid) return <Redirect to='/' /> 
        return(
            <div className="dad">
            <div className="container containers">
              <form  onSubmit={this.handleSubmit}>
           <div className="form-group">
               <h4>Account Details</h4>
              <label htmlFor="Email">Email</label>
              <input type="email"  required onChange={this.handleChange}  className="form-control" id="email"  aria-describedby="emailHelp" />
           </div>
           <div className="form-group">
             <label htmlFor="Password">Password</label>
             <input type="password" required onChange={this.handleChange} className="form-control" id="password"  />
           </div>
           <div className="form-group">
             <h4>Contact Details</h4>
             <label htmlFor="name">Name</label>
             <input type="text" required onChange={this.handleChange} className="form-control" id="name"  />
           </div>
           <div className="form-group">
             <label htmlFor="number">Number</label>
             <input type="text" required onChange={this.handleChange} className="form-control" id="number"  />
           </div>
             <div className="signup">
             <button type="submit" className="btn btn-primary">Submit</button>
             </div>     
             <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
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
    signup: (creds) => dispatch(signup(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)