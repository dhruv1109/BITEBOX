import React, { Component } from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
class Previous extends Component {
render(){
     const  { orders } = this.props
    if(orders){
     return(
        <div>
           
        </div>
    )}
    else {
        return(
        <div>
            <h1>You dont have any orders! Lets get you started</h1>
        </div>
         )}
}
}
const mapStateToProps = state => {
    console.log(state);
    return {
      orders : state.firestore.data.orders,
      auth: state.firebase.auth
    };
  };

export default compose(connect(mapStateToProps), 
firestoreConnect(Props => [
{
  collection: 'Users',
  doc: Props.auth.uid,
  subcollections: [{ collection: 'orders' }],
  storeAs: 'orders'
}

]) )(Previous)