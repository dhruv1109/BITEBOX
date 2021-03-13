import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { placeOrder } from '../../Store/Actions/orderActions'
import './MainCart.css'
class MCart extends Component {
state = {
   location: "",
   delivery: "",
}
handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
  
}

handleSubmit = (addToCart, auth) => {
 
  var OrderID = this.generateID(8);
  this.props.placeOrder(this.state,addToCart, auth, OrderID)
}


generateID = (length) => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
    render() {
      const  {addToCart, auth } = this.props 
      
      const {location, delivery}= this.state;
      const isEnabled = location.length > 0 && delivery.length > 0;
      if(addToCart.cartnumber===0) return <Redirect to='/cart'/>        
        return(
            <div className="papa"> 
            <div  className="container leeds">
              <form >
              <h3>{ addToCart.shop.name }</h3>
                  {addToCart.cartItems.map((item,index) => (
                    <div key={index} className="items">
                    <div className="right">
                      {item.Name}
                     Rs { item.Price }
                    </div>
                  </div>
              ))}    
            <div className="details">
            <select className="btn btn-info" type="button" id="location" onChange={this.handleChange} >
              <option value="Hostel A">Hostel A</option>
              <option value="Hostel B">Hostel B</option>
              <option value="Hostel C">Hostel C</option>
              <option value="Hostel D">Hostel D</option>
              <option value="Hostel E,I,G,N">Hostel E,I,G,N</option>
              <option value="Hostel F">Hostel F</option>
              <option value="Hostel H">Hostel H</option>
              <option value="Hostel K">Hostel K</option>
              <option value="Hostel L">Hostel L</option>
              <option value="Hostel J">Hostel J</option>
              <option value="Hostel M">Hostel M</option>
              <option value="Hostel FRE,FRD">Hostel FRE,FRD</option>
              <option value="Library">Library</option>
              <option value="ICIC/SBI">ICICI/SBI</option>
           </select>
  <select className="btn btn-info" type="button" id="delivery" onChange={this.handleChange} required> 
             <option value="Select" >Select</option>
             <option value="Delivery">Delivery</option>
             <option value="Pickup" >Pickup</option>
           </select>       

              { addToCart.shop.Discount === 0?  <div></div>  :<h4>Yay dicount of Rs {addToCart.shop.Discount}</h4>} 
              {addToCart.shop.Tax=== 0? <div></div>: <h4>Taxes: Rs { addToCart.shop.Tax}</h4> }  
              <h4>Delivery Charges:(On orders below Rs {addToCart.shop.MinOrder}) Rs { addToCart.shop.DeliveryCharge } </h4>
              <h3 id="cost" onChange={this.handleChange} >Total Cost: Rs { addToCart.cartcost}</h3>     
              <Link to="/"> <button className="btn btn-info bi" disabled={!isEnabled} type="button"onClick={this.handleSubmit(addToCart, auth )} >PLACE ORDER</button> </Link>
             </div>
             </form>
                
             </div>
             <div className="footerr">
               <div className="foothead">
                 <h1>BITEBOX</h1>
                 <h5>A small initiative by a small group of friends</h5>
                </div>
                <div className="footbody">
                  <div className="contacts">
                    <h3>Contact US</h3> 
                    <p><i className="fab fa-instagram fa-2x"></i> <i className="fab fa-facebook fa-2x"></i> <i className="fab fa-linkedin fa-2x"></i> </p>
                    <h5>Number: +91
                    </h5>
                    <h5>Email: bitebox@gmail.com</h5>
                  </div>
                  <div className="org">
                    <h3>A GOGA CORPORATION PRODUCT</h3>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
const mapStatToProps = (state) => {
    console.log(state)
    return {
      addToCart: state.cart,
      auth: state.firebase.auth
     } 
  }
const mapDispatchToProps = (dispatch) => {
  return {
     placeOrder: (cred, addToCart, auth, OrderID ) => dispatch(placeOrder(cred, addToCart, auth, OrderID)),
    
  }
}  
export default connect( mapStatToProps,mapDispatchToProps)(MCart)