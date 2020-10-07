import React, { Component } from 'react';
import ShopSummary from './ShopSummary'
import {addToCart} from "../../store/actions/cartActions";
import './ShopList.css'
class ShopList  extends Component {
  addToCart = (product) => {
    this.props.addToCart(product);
}
  render() {
    const { shops } = this.props;
  return (
        <div className="row yeh">
               { shops && shops.map(shop => {
        return (
           <div className="col-12 col-md-6 col-lg-4 lo" key={shop.id} >
          <ShopSummary shop={shop} addToCart={ addToCart } key={shop.id} />
           </div> 
          )
        })}  
        </div>
    )
      }
}
export default ShopList;