import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { placeOrder } from '../../store/actions/orderActions'
import './MainCart.css'
class MCart extends Component {
state = {
   location: "Hostel-A",
   delivery: "Delivery",
}
handleChange = (e) => {
  console.log(this.state)
  this.setState({
    [e.target.id]: e.target.value
  })
}
handleSubmit = (addToCart, auth) => {
  this.props.placeOrder(this.state, addToCart, auth)
}

    render() {
      const  {addToCart, auth } = this.props 
      if(addToCart.cartnumber===0) return <Redirect to='/cart'/>        
        return(
            <div className="papa"> 
            <div  className="container leeds">
              <form  >
              <h3>{ addToCart.shop.name }</h3>
                  {addToCart.cartItems.map((item) => (
                    <div key={item.id} className="items">
                    <div>{item.Name}</div>
                    <div className="right">
                    <div>Rs { item.Price }</div>
                    </div>
                  </div>
              ))}    
            <div className="details">
            <select className="btn btn-info" type="button" id="location" onChange={this.handleChange} required>
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
             <option value="Delivery">Delivery</option>
             <option value="Pickup" >Pickup</option>
           </select>          

              { addToCart.shop.Discount === 0?  <div></div>  :<h4>Yay dicount of Rs {addToCart.shop.Discount}</h4>} 
              {addToCart.shop.Tax=== 0? <div></div>: <h4>Taxes: Rs { addToCart.shop.Tax}</h4> }  
              <h4>Delivery Charges:(On orders below Rs {addToCart.shop.MinOrder}) Rs { addToCart.shop.DeliveryCharge } </h4>
              <h3 id="cost" onChange={this.handleChange} >Total Cost: Rs { addToCart.cartcost}</h3>     
              <Link to="/PAOrders"> <button className="btn btn-info bi" type="button"onClick={this.handleSubmit(addToCart, auth)} >PLACE ORDER</button> </Link>
             </div>
             </form>
                
             </div>
             <div className="footerr">
               <h1>BITEBOX</h1>
               <p>
                 Cantact Us
                 <br/>
                 email:Goga@gmail.com
                 <br/>
                 insta: BITEBOX
                 <br />
                 whatsapp: lund nhi Dege
                 <br />
                  GOGA INC.
               </p>
             </div>
             </div>
        )
    }
}
const mapStatToProps = (state) => {
    return {
      addToCart: state.cart,
      auth: state.firebase.auth
     } 
  }
const mapDispatchToProps = (dispatch) => {
  return {
     placeOrder: (cred, addToCart, auth) => dispatch(placeOrder(cred, addToCart, auth)),
    
  }
}  
export default connect( mapStatToProps,mapDispatchToProps)(MCart)