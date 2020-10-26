import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class OrderPlaced extends Component {
render(){
  const { Order }= this.props;
  console.log(Order);
    return(
        <div>
          <p>Waiting for Shop to accept Your Order...</p>  
        </div>
    )
}

}
const mapsToProps =(state ,ownProps) =>{
  const id= ownProps.match.params.id;
  const Orders= state.firestore.data.Order;
  const Order= Orders? Orders[id]: null;
  console.log(id);
  return{
      Order: Order
  }
}
export default compose(
  connect(mapsToProps),
  firestoreConnect(Props => [
    { collection: "Order" }
  ])
)(OrderPlaced);