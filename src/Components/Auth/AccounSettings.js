import React, { Component } from 'react'
import { connect } from 'react-redux'
import { adDetails} from '../../store/actions/authActions'
import { Link } from 'react-router-dom'
import './AccountSettings.css'
import { Redirect} from 'react-router-dom'
class Account extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }   
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.adDetails(this.state)
      }    
   render() {
       const {auth} = this.props
       if (!auth.uid) return <Redirect to='/login' />
       return(
           <div className="dad">
              
               <form  className="container formyo" onSubmit={this.handleSubmit} >
               <div className="title">
                   <h3>ACCOUNT SETTINGS</h3>
               </div>
                <div className="form-group">
                 <label htmlFor="name">Name</label>
                 <input type="text" required={true} className="form-control"  onChange={this.handleChange} id="name" aria-describedby="emailHelp" placeholder={auth.name} />
               </div>
               <div className="form-group">
                 <label htmlFor="phone">Phone Number</label>
                 <input type="text"  required={true}  className="form-control"  onChange={this.handleChange} id="phone" placeholder={auth.phone} />
               </div>
               <div className="pp">
                 <div className="boton">
                   <Link to='/'><button type="submit" className="btn" >Submit</button></Link>
                </div>
               </div> 
</form>
           </div>
       )
   }
}
const mapStateToProps = (state) => {
    return {
    auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
     adDetails : (auth) => dispatch(adDetails(auth))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)