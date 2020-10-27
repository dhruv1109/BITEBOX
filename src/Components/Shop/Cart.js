import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {  removeItem} from '../../store/actions/cartActions'
import './Cart.css'
class Cart extends Component{
    handleRemove = (item)=>{
        this.props.removeItem(item);  
    }
    render(){
        const {addToCart} = this.props
       console.log(addToCart.shopid)
       if(addToCart.cartnumber === 0) {
           return(
             <div>
            <div className="cart cart-header">
              <h2>CART (EMPTY)</h2>
              <img src="https://image.freepik.com/free-vector/supermarket-food-icons-set_23-2147495464.jpg" alt="lol" /> 
              </div>
             </div>
           )
       }
      else{
      return(
        <div className="main">  
         <div > 
         <h3>Dishes: {addToCart.cartnumber }</h3>   
         <h3>{  addToCart.shop.name }</h3>
                  <form className="plane"> 
                  {addToCart.cartItems.map((item, index) => (
                    <div key={index} className="items">
                    <div>{item.Name}  
                       Rs { item.Price }
                    </div>
                    <div className="right">
                      <button
                        className="btn btn-outline-danger"
                        type="button" 
                        onClick={()=>{this.handleRemove(item)}}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
              ))} 
                  <div className="button"> 
                  <Link to="/MCart" ><button type="button" className="btn btnoo" 
                  onClick={ () => {
                    if(addToCart.cartcost <= addToCart.shop.MinOrder){
                      addToCart.cartcost = addToCart.cartcost + addToCart.shop.Tax + addToCart.shop.DeliveryCharge}
                     else{
                      addToCart.cartcost = addToCart.cartcost + addToCart.shop.Tax
                     } 
                  }
                    } 
                  >CHECKOUT</button></Link>
                  </div>  
                  </form>
                 
                 
                
        </div>
        </div>
      )}  }    
}
const mapStatToProps = (state) => {
  console.log(state);
  
  return {
    addToCart: state.cart,
   } 
}
const mapDispatchStateToProps = (dispatch) => {
  return {
      removeItem : (item) => dispatch(removeItem(item)),
  }
}

export default connect(mapStatToProps, mapDispatchStateToProps)(Cart)          
     