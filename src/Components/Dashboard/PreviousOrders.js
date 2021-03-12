import React, { Component } from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import './PreviousOrders.css'
class Previous extends Component {
render(){
     const  { orders } = this.props
    if(orders){
     return(
        <div>
          <div className="orderss">
            <h2 className="hioe">Your orders</h2>
           {orders && orders.map(orders => {
             return(
               <div  className="do container" key={orders.id}>
               <h3>{orders.ShopName}</h3>  
               <div className="txt">Items ordered:</div>
               <div> {orders.Items}   <div className="price">Rs {orders.Price}</div> </div>
               <div className="txt">Ordered on:</div>
               <div>{orders.OrderTime.toDate().toString()}</div>
               </div>
             )
           })}
           </div>
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
    
      orders : state.firestore.ordered.orders,
      auth: state.firebase.auth
    };
  };

export default compose(connect(mapStateToProps), 
firestoreConnect(Props => [{ collection: 'Users' },
{
  collection: 'Users',
  doc: Props.auth.uid,
  subcollections: [{ collection: 'orders' }],
  storeAs: 'orders'
}

]) )(Previous)